// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageProps,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import {
//   BORDERRADIUS,
//   COLORS,
//   FONTFAMILY,
//   FONTSIZE,
//   SPACING,
// } from '../theme/theme';
// import CustomIcon from '../components/CustomIcon';
// import GradientBGIcon from '../components/GradientBGIcon';
// import ProfilePic from '../components/ProfilePic';

// const BlogScreen = () => {
//   return (
//     <View style={styles.ScreenContainer}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
//         <View style={styles.HeaderContainer}>
//             <TouchableOpacity>
//               <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
//             </TouchableOpacity>
//             <Text style={styles.HeaderText}>Top Stories</Text>
//             <TouchableOpacity onPress={() => {
//               }}>
//                 <ProfilePic />
//             </TouchableOpacity>
//         </View>
//         <View>
//         <Image
//           source={require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png')}
//           style={styles.ItemImage}>
//         </Image>
//         </View>
//         <Text style={styles.ScreenTitle}>The Art Of Blending Coffee! </Text>
//         <View style={styles.AuthorInfo}>
//           <ProfilePic />
//           <Text style={styles.AuthorDetails}>Author Name</Text>
//         </View>
//         <Text style={styles.ItemDescription}>
//           Like an artist creating a perfectly harmonious canvas by using his paint palette, 
//           the roaster produces seductive masterpieces in the cup out of single-origin coffees. 
//           As old as coffee itself, blending is a technique that optimizes the body, aroma, and flavors 
//           of single-origins in order to create new tastes. The goal of coffee blending is to produce a cup 
//           of coffee that is superior to each single component alone.Coffee blending may be done either before or 
//           after roasting, and arguments for and against each method exist. For the home coffee chef purposes, 
//           blending before roasting makes perfect sense because it is easier and involves smaller quantities.
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ScreenContainer: {
//     flex: 1,
//     backgroundColor: COLORS.primaryBlackHex,    
//   },
//   ScrollViewFlex: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//   },
//   HeaderContainer: {
//     padding: SPACING.space_10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   HeaderText: {
//     fontFamily: FONTFAMILY.poppins_semibold,
//     fontSize: FONTSIZE.size_20,
//     color: COLORS.primaryWhiteHex,
//   },
//   ItemImage: {
//     marginTop: SPACING.space_18,
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   ScreenTitle: {
//     marginVertical: SPACING.space_18,
//     fontSize: FONTSIZE.size_24,
//     fontFamily: FONTFAMILY.poppins_bold,
//     color: COLORS.primaryWhiteHex,
//     paddingHorizontal: SPACING.space_30,
//     paddingVertical: SPACING.space_10,
//   },
//   AuthorInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   AuthorDetails: {
//     marginLeft: SPACING.space_18,
//     fontFamily: FONTFAMILY.poppins_semibold,
//     fontSize: FONTSIZE.size_16,
//     color: COLORS.primaryWhiteHex,
//   },
//   ItemDescription: {
//     marginVertical: SPACING.space_30,
//     marginHorizontal: SPACING.space_30,
//     color: COLORS.primaryWhiteHex,
//     fontFamily: FONTFAMILY.poppins_regular,
//     fontSize: FONTSIZE.size_16,
//     textAlign: 'justify',
//   },
// });

// export default BlogScreen;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ProfilePic from '../components/ProfilePic';
import GradientBGIcon from '../components/GradientBGIcon';

const BlogScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <View style={styles.HeaderContainer}>
             <TouchableOpacity>
               <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
             </TouchableOpacity>
             <Text style={styles.HeaderText}>Top Stories</Text>
             <TouchableOpacity onPress={() => {
              }}>
                <ProfilePic />
              </TouchableOpacity>
            </View>
            <Image
              source={require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png')}
              style={styles.ItemImage}>
            </Image>
            <Text style={styles.ScreenTitle}>The Art Of Blending Coffee! </Text>
            <View style={styles.AuthorInfo}>
              <ProfilePic />
              <Text style={styles.AuthorDetails}>Author Name</Text>
            </View>
            <Text style={styles.ItemDescription}>
              Like an artist creating a perfectly harmonious canvas by using his paint palette, 
              the roaster produces seductive masterpieces in the cup out of single-origin coffees. 
              As old as coffee itself, blending is a technique that optimizes the body, aroma, and flavors 
              of single-origins in order to create new tastes. The goal of coffee blending is to produce a cup 
              of coffee that is superior to each single component alone.Coffee blending may be done either before or 
              after roasting, and arguments for and against each method exist. For the home coffee chef purposes, 
              blending before roasting makes perfect sense because it is easier and involves smaller quantities.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
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
  ItemImage: {
    marginTop: SPACING.space_18,
    width: '100%',
    justifyContent: 'space-between',
  },
  ScreenTitle: {
    marginVertical: SPACING.space_18,
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.poppins_bold,
    color: COLORS.primaryWhiteHex,
    paddingHorizontal: SPACING.space_30,
    paddingVertical: SPACING.space_10,
  },
  AuthorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AuthorDetails: {
    marginLeft: SPACING.space_18,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  ItemDescription: {
    marginVertical: SPACING.space_30,
    marginHorizontal: SPACING.space_30,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    textAlign: 'justify',
  },
});

export default BlogScreen;