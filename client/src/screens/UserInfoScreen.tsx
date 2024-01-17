import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from '../components/GradientBGIcon'



const UserInfoScreen = ({navigation} : any) => {
  return (
    <View style={styles.OuterContainer}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={ () => {
          navigation.pop();
        }}>
          <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
        </TouchableOpacity>
      </View>
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
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  OuterContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primaryBlackHex,
  },
  ImageContainer: {
    paddingVertical: SPACING.space_30*2,
    paddingHorizontal: SPACING.space_36*3.5,
    overflow: 'hidden',

  },
  Image: {
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 4,
    borderRadius: 20,
  },
  InfoContainer: {
    marginVertical: SPACING.space_20,
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
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
})

export default UserInfoScreen;
