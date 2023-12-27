import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    const navigation = useNavigation(); 

    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity>
                <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            </TouchableOpacity>
            <Text style={styles.HeaderText}>{title}</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Login'); // Navigate to the 'Login' screen, can be made better later
            }}>
                <ProfilePic />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
})

export default HeaderBar;