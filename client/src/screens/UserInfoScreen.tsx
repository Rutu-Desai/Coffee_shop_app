import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from '../components/GradientBGIcon'
import { useStore } from '../store/store'



const UserInfoScreen = ({navigation} : any) => {
  const UserName = useStore((state: any) => state.UserName);
  const Email = useStore((state: any) => state.Email);
  const Phone = useStore((state: any) => state.Phone);
  const Location = useStore((state: any) => state.Location);
  const resetUserInfo = useStore((state: any) => state.resetUserInfo);

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
          <Text style={styles.InfoText}>Username:</Text><Text style={styles.InfoSubText}>{UserName}</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Email:</Text><Text style={styles.InfoSubText}>{Email}</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Phone:</Text><Text style={styles.InfoSubText}>{Phone}</Text>
        </View>
        <View>
          <Text style={styles.InfoText}>Address:</Text><Text style={styles.InfoSubText}>{Location}</Text>
        </View>
      </View>
      <TouchableOpacity  
          style={styles.SubmitButton}
          onPress={() => {
            resetUserInfo();
            navigation.navigate('Login');
          }}
      >
        {<Text style={styles.ButtonText}>Logout</Text>}
      </TouchableOpacity>
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
    paddingBottom: SPACING.space_30*1.5,
    paddingTop: SPACING.space_15,
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
})

export default UserInfoScreen;
