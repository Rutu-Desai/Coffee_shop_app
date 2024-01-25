import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import LoginInput from '../components/LoginInput';
import axios from 'axios';
import { useStore } from '../store/store';

const RegisterScreen = ({navigation} : any) => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setUserInfo = useStore((state: any) => state.setUserInfo);
  const CartList = useStore((state: any) => state.CartList);

  const setCart = useStore((state: any) => state.setCart);
  const setOrderHistory = useStore((state: any) => state.setOrderHistory);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const handleSubmit = async () => {
    try{
      setLoading(true);
      if(!UserName || !Password ){
        Alert.alert('Please fill all fields');
        setLoading(false);
        return;
      }
      setLoading(false);

      //get user details on login
      const {data} = await axios.post('http://10.80.4.212:8080/api/v1/auth/login', {UserName, Password});
      Alert.alert(data && data.message);

      //set values on login
      setUserInfo(data.user.UserName, data.user.Email, data.user.Phone, data.user.Location);

      console.log("cartlist", JSON.stringify(CartList));
      
      //get CartList on login
      try {
        const {data} = await axios.put('http://10.80.4.212:8080/api/v2/auth/cartItemGet', {
          UserName,
        });
        Alert.alert(data && data.message);
        console.log(JSON.stringify(data.cart[0]));

        //set cartlist on login
        setCart(data.cart);

      } catch (error: any) {
        Alert.alert(error.response.data.message);
        console.log(error);      
      }
      //set cart price
      calculateCartPrice();

      //get OrderHistoryList on login
      try {
        const {data} = await axios.post('http://10.80.4.212:8080/api/v4/auth/orderhistoryGet', {
          UserName,
        });
        Alert.alert(data && data.message);

        //set OrderHistoryList on login
        setOrderHistory(data.orderhistory);

      } catch (error: any) {
        Alert.alert(error.response.data.message);
        console.log(error);      
      }

      if(data){
        navigation.navigate('Tab');
      }

    } catch (error : any) {
      Alert.alert(error.response.data.message);
      setLoading(false);
      console.log(error)
    }
  }

  return (
    <View style={styles.OuterContainer}>
          <Text style={styles.PageTitle}>Login</Text>


        <LoginInput iconType='wallet' placeholderText='Enter Username' value={UserName} setValue={setUserName}/>
        <LoginInput iconType='chip' placeholderText='Enter Password' value={Password} setValue={setPassword} secureTextEntry={true} />
        
        {/* // To check if JSON object is proper updated */}
        {/* <Text style={styles.ButtonText}>{JSON.stringify({UserName, Email, Password, Location}, null , 4)}</Text> */}

        <View>
          <TouchableOpacity  
              style={styles.SubmitButton}
              onPress={() => {
                // navigation.navigate('Tab')
                handleSubmit();
              }}
          >
            {loading ? <Text style={styles.ButtonText}>Please Wait...</Text> : <Text style={styles.ButtonText}>Login</Text>}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Register');
          }}>
            <Text style={styles.LoginText}>Don't have an account? <Text style={styles.LinkText}>REGISTER</Text></Text>
          </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  LinearGradientBG: {
    // height: SPACING.space_36,
    width: '75%',
    paddingVertical: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.space_30,
    marginLeft: SPACING.space_30*1.7,
  },
  PageTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontSize: FONTSIZE.size_20*2,
    justifyContent: 'center',
    textAlign: 'justify',
    marginLeft: 130,
    marginBottom: SPACING.space_36,
    letterSpacing: 5,
  },
  ButtonText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_bold,
  },
  SubmitButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    marginTop: SPACING.space_20,
    paddingVertical: SPACING.space_18,
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SPACING.space_20*5,
    width: '50%',
    textAlign: 'center',
  },
  LoginText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_light,
    padding: SPACING.space_20,
    textAlign: 'justify',
    marginLeft: SPACING.space_20*2,
    marginTop: SPACING.space_10,
    fontSize: FONTSIZE.size_16*1.0625,
  },
  LinkText: {
    color: COLORS.primaryRedHex,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default RegisterScreen;
