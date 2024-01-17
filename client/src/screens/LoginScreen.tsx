import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import LoginInput from '../components/LoginInput';

const LoginScreen = ({navigation} : any) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.OuterContainer}>
        <LoginInput iconType='wallet' placeholderText='Enter Username' />
        <LoginInput iconType='star' placeholderText='Enter Email' />
        <LoginInput iconType='chip' placeholderText='Enter Phone' />
        <LoginInput iconType='location' placeholderText='Enter Address' />


        <TouchableOpacity  onPress={() => {
            navigation.navigate('Tab')
        }}>
            <Text style={styles.ButtonText}>Go to Home!</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    OuterContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primaryBlackHex,

    },
    ButtonText: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_18,
        fontFamily: FONTFAMILY.poppins_semibold,
    },
    InputContainerComponent: {
        flexDirection: 'row',
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
      },
    InputIcon: {
    marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
      },
});

export default LoginScreen
