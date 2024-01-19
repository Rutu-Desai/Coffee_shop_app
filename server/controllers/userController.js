const JWT = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const userModel = require('../models/userModel');

const registerController = async (req, res) => {
    try {
        const {UserName, Email, Password, Location} = req.body
        //validation
        if(!UserName){
            return res.status(400).send({
                success: false,
                message: 'UserName is required'
            })
        }
        if(!Email || !Email.includes('@')){
            return res.status(400).send({
                success: false,
                message: 'Email is required and should contain @'
            })
        }
        if(!Password || Password.length < 6){
            return res.status(400).send({
                success: false,
                message: 'Password is required and 6 char long'
            })
        }
        if(!Location){
            return res.status(400).send({
                success: false,
                message: 'location is required'
            })
        }
        //existing user
        const existingUser = await userModel.findOne({Email: Email});
        const existingUser2 = await userModel.findOne({UserName: UserName});

        if(existingUser || existingUser2){ 
            return res.status(500).send({
                success: false,
                message: 'User already registered with this email or username'
            })
        }
        //hashed password
        const hashedPassword = await hashPassword(Password);
        
        //save user
        const user = await userModel({UserName, Email, Password: hashedPassword, Location}).save();

        return res.status(201).send({
            success: true,
            message: 'Registration successful',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in reg api',
            error,
        });
    }
};

const loginController = async (req, res) => {
    try {
        const {UserName, Password} = req.body;
        if(!UserName){
            return res.status(500).send({
                success: false,
                message: 'Please provide username',
            });
        }
        if(!Password){
            return res.status(500).send({
                success: false,
                message: 'Please provide password',
            });
        }
        const user = await userModel.findOne({UserName});
        if(!user){
            return res.status(500).send({
                success: false,
                message: 'user not found',
            });
        }
        //match password
        const match = await comparePassword(Password, user.Password);
        if(!match){
            return res.status(500).send({
                success: false,
                message: 'invalid username or password'
            });
        }
        //TOKEN JWT
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        //password must not be displayed
        user.Password = undefined;

        res.status(200).send({
            success: true,
            message: 'login successful',
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'error in login api',
            error,
        });        
    }
};

module.exports = {registerController, loginController};