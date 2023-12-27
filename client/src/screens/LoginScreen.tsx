import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'



const LoginScreen = () => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.ImageContainer}>
          <Image source={require('../assets/app_images/profile.png')} 
          style={styles.Image}/>
      </View>
      <View style = {styles.InfoContainer}>
        <View style={styles.TextContainer}>
          <Text style={styles.InfoText}>Username:</Text><Text style={styles.InfoSubText}>Coffee_lover</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Email:</Text><Text style={styles.InfoSubText}>Coff.21@gmail.com</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Phone:</Text><Text style={styles.InfoSubText}>989898989</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Address:</Text><Text style={styles.InfoSubText}>Near coffee shop</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  OuterContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primaryBlackHex,
  },
  ImageContainer: {
    paddingTop: '45%',
    paddingHorizontal: '30%',
    overflow: 'hidden',

  },
  Image: {
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 4,
    borderRadius: 72,
  },
  InfoContainer: {
    marginVertical: SPACING.space_36,
    marginLeft: SPACING.space_36*3,
    gap: SPACING.space_20,
  },
  TextContainer: {

  },
  InfoText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  InfoSubText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
})

export default LoginScreen
