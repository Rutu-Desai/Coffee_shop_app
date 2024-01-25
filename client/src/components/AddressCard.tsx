import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import { useStore } from '../store/store';
import { useState } from 'react';

interface AddressCardProps {
    display: boolean;
};

const AddressCard: React.FC<AddressCardProps> = ({display}) => {
    const Location = useStore((state: any) => state.Location);
    const [selectAddress, setSelectAddress] = useState('Home Address');
    const setLocation = useStore((state: any) => state.setLocation);

  return (
    display ? 
        <View style={styles.CardContainer}>
            <View style={[styles.CardOuterContainer, {
                borderColor: selectAddress=='Home Address' ? COLORS.primaryWhiteHex : COLORS.primaryGreyHex
                
                }]}>
                <TouchableOpacity onPress={() => {
                    setSelectAddress('Home Address');
                }}>
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.ContainerLinearGradient}>
                        <Text style={styles.DescriptionTitle}>Home Address</Text>
                        <Text style={styles.DescriptionText}>{Location}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={[styles.CardOuterContainer, {
                borderColor: selectAddress=='Other Address' ? COLORS.primaryWhiteHex : COLORS.primaryGreyHex
                
                }]}>
                <TouchableOpacity onPress={() => {
                    setSelectAddress('Other Address');
                }}>
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.ContainerLinearGradient}>
                        <Text style={styles.DescriptionTitle}>Other Address</Text>
                        <TextInput style={styles.DescriptionText} 
                            placeholder='Type in the address' 
                            placeholderTextColor={COLORS.primaryWhiteHex}
                            onChangeText={ text =>{
                                setLocation(text);
                            }}></TextInput>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    : <></>
  );
}

export default AddressCard;

const styles = StyleSheet.create({
    HeaderText: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
    },
    CardOuterContainer: {
        borderRadius: BORDERRADIUS.radius_15 * 2,
        borderWidth: 3,
        overflow: 'hidden',
    },
    CardContainer: {
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden',
        marginHorizontal: SPACING.space_20,
        gap: SPACING.space_24,
    },
    ContainerLinearGradient: {
        gap: SPACING.space_10,
        padding: SPACING.space_20,
    },
    DescriptionTitle: {
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.secondaryLightGreyHex,
    },
    DescriptionText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
});