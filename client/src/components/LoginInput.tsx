import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface LoginInputProps {
  iconType: string;
  placeholderText: string;
  secureTextEntry ?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({
  iconType,
  placeholderText,
  secureTextEntry
}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.InputContainerComponent}>
      <TouchableOpacity>
        <CustomIcon
          style={styles.InputIcon}
          name= {iconType}
          size={FONTSIZE.size_18}
          color={
            searchText.length > 0
              ? COLORS.primaryOrangeHex
              : COLORS.primaryLightGreyHex
          }
        />
      </TouchableOpacity>
      <TextInput
        placeholder= {placeholderText}
        value={searchText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        onChangeText={text => {
          setSearchText(text);
        }}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        style={styles.TextInputContainer}
      />
      {searchText.length > 0 ? (
        <TouchableOpacity>
          <CustomIcon
            style={styles.InputIcon}
            name="close"
            size={FONTSIZE.size_16}
            color={COLORS.primaryLightGreyHex}
            onPress={() => {
                setSearchText('')
            }}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
  </View>
  );
}

const styles = StyleSheet.create({
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
})

export default LoginInput
