import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { useState } from 'react';
import GradientBGIcon from '../components/GradientBGIcon';
import ProfilePic from '../components/ProfilePic';
import PaymentFooter from '../components/PaymentFooter';
import { useStore } from '../store/store';
import AddressCard from '../components/AddressCard';

const DeliveryDetailsScreen = ({navigation, routes} : any) => {

    const [deliveryMode, setDeliveryMode] = useState('Pick-up at store');
    const [displayAddress, setDisplayAddress] = useState(false);

    const CartPrice = useStore((state: any) => state.CartPrice);


    const buttonPressHandler = () => {
        navigation.push('Payment', {amount: CartPrice});
    }

  return (
    
    <View style={styles.ScreenContainer}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.ScrollViewFlex}>

            <View style={styles.HeaderContainer}>
                <TouchableOpacity onPress={()=>{
                    navigation.pop();
                }}>
                    <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Mode Of Delivery</Text>
                <TouchableOpacity onPress={() => {
                navigation.push('UserInfo')
                }}>
                    <ProfilePic />
                </TouchableOpacity>
            </View>
            
            <View>
                <View style={styles.DeliveryContainer}>
                    <Text style={styles.DeliveryContainerText}>Choose mode of delivery:</Text>
                </View>
                <View style={styles.OptionContainer}>
                    <View style={[styles.ButtonContainer, , {
                            borderColor: deliveryMode=='Pick-up at store' ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex
                        },]}>
                        <TouchableOpacity onPress={() => {
                            setDeliveryMode('Pick-up at store');
                            setDisplayAddress(false);
                        }}>
                            <Text style={styles.ButtonText}>Pick-up at store</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.ButtonContainer, , {
                            borderColor: deliveryMode=='Delivery to address' ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex
                        },]}>
                        <TouchableOpacity onPress={()=>{
                            setDeliveryMode('Delivery to address');
                            setDisplayAddress(true);
                        }}>
                            <Text style={styles.ButtonText}>Delivery to address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <AddressCard display={displayAddress} />
            </View>
        </ScrollView>
        <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Continue to Pay"
              price={{price: CartPrice, currency: 'Rs'}}
            />
    </View>
  )
}

export default DeliveryDetailsScreen

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex:{
        flexGrow: 1,
    },
    HeaderContainer: {
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
      HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
    DeliveryContainer: {
        paddingTop: SPACING.space_36,
        paddingHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    DeliveryContainerText: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_24,
    },
    OptionContainer: {
        paddingHorizontal: SPACING.space_20*2,
        paddingVertical: SPACING.space_10,
        paddingBottom: SPACING.space_20*3,
        gap: SPACING.space_20,
    },
    ButtonContainer: {
        paddingHorizontal: SPACING.space_36,
        paddingVertical: SPACING.space_10,
        gap: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_15 * 2,
        borderWidth: 3,
    },
    ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
        paddingVertical: SPACING.space_10/2,
    },
});