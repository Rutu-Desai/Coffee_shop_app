import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';
import LinearGradient from 'react-native-linear-gradient';
import { useAdminStore } from '../store/Adminstore';

const AdminScreen = ({navigation} : any) => {

    const FavoritesList = useAdminStore((state: any) => state.FavoritesList);
    const OrderHistoryList = useAdminStore((state: any) => state.OrderHistoryList);
    let revenue=0;
    var user_order = new Map();
    let max_user = 1;
    let user_most_order = '';
    for(let i=0; i<OrderHistoryList.length; i++){
        revenue += parseFloat(OrderHistoryList[i].CartListPrice);
        if(user_order.has(OrderHistoryList[i].UserName)){
            let temp = user_order.get(OrderHistoryList[i].UserName);
            user_order.set(OrderHistoryList[i].UserName, temp+1);
            if(user_order.get(OrderHistoryList[i].UserName) > max_user){
                max_user = user_order.get(OrderHistoryList[i].UserName);
            }
        } else {
            user_order.set(OrderHistoryList[i].UserName, 1);
        }
    }

    user_order.forEach( function(value, key){
        if(max_user == value){
            user_most_order += key + ''
        }
    });

    var pop_coffee = new Map();
    var pop_bean = new Map();
    let max_key_coffee = 1;
    let max_key_bean = 1;
    for(let i=0; i<FavoritesList.length; i++){
        if(FavoritesList[i].type == 'Coffee'){
            if(pop_coffee.has(FavoritesList[i].name)){
                let temp = pop_coffee.get(FavoritesList[i].name);
                pop_coffee.set(FavoritesList[i].name, temp+1);
                if(pop_coffee.get(FavoritesList[i].name) > max_key_coffee){
                    max_key_coffee = pop_coffee.get(FavoritesList[i].name);
                }
            } else {
                pop_coffee.set(FavoritesList[i].name, 1);
            }
        } else if(FavoritesList[i].type == 'Bean'){
            if(pop_bean.has(FavoritesList[i].name)){
                let temp = pop_bean.get(FavoritesList[i].name);
                pop_bean.set(FavoritesList[i].name, temp+1);
                if(pop_bean.get(FavoritesList[i].name) > max_key_bean){
                    max_key_bean = pop_bean.get(FavoritesList[i].name);
                }
            } else {
                pop_bean.set(FavoritesList[i].name, 1);
            }
        }
    }
    let popular_coffee = '';
    let popular_bean = '';
    pop_coffee.forEach( function(value, key){
        if(value == max_key_coffee){
            popular_coffee += key + ' ';
        }
    });

    pop_bean.forEach( function(value, key){
        if(value == max_key_bean){
            popular_bean += key + ' ';
        }
    });

    
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>

            <View style={styles.HeaderContainer}>
                <TouchableOpacity onPress={()=>{
                }}>
                    <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Admin DashBoard</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login');
                }}>
                    <Text style={styles.LogOutText}>LOG-OUt</Text>
                </TouchableOpacity>
            </View>

            {/* orders placed and delivered */}
            <View style={styles.CardOuterContainer}>
                <View style={styles.CardInLineContainer}>
                    <LinearGradient 
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 1}}
                    style={styles.CardLinearGradientContainer}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                        <Text style={styles.TitleText}>Orders</Text>
                        <Text style={styles.NumberText}>{OrderHistoryList.length}</Text>
                    </LinearGradient>
                </View>
                <View style={styles.CardInLineContainer}>
                    <LinearGradient 
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.CardLinearGradientContainer}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                        <Text style={styles.TitleText}>Revenue</Text>
                        <Text style={styles.NumberText}> {revenue}</Text>
                    </LinearGradient>
                </View>
            </View>

            {/* popular items */}
            <View style={styles.CardOuterContainer}>
                <View style={styles.CardInLineContainer2}>
                    <LinearGradient 
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 1}}
                    style={styles.CardLinearGradientContainer}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                        <Text style={styles.TitleText}>Popular Coffee</Text>
                        <Text style={styles.PopularText}>{popular_coffee}</Text>
                    </LinearGradient>
                </View>
                <View style={styles.CardInLineContainer2}>
                    <LinearGradient 
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.CardLinearGradientContainer}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                        <Text style={styles.TitleText}>Popular Bean</Text>
                        <Text style={styles.PopularText}>{popular_bean}</Text>
                    </LinearGradient>
                </View>
            </View>

            {/* something else*/}
            <View style={styles.CardOuterContainer}>
                <View style={styles.CardInLineContainer3}>
                    <LinearGradient 
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 1}}
                    style={styles.CardLinearGradientContainer}
                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                        <Text style={styles.TitleText}>User With Most Orders</Text>
                        <Text style={styles.PopularText}>{user_most_order}</Text>
                    </LinearGradient>
                </View>
            </View>



      </ScrollView>
    </View>
  )
}

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
        paddingBottom: SPACING.space_30*2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
    LogOutText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryRedHex,
        borderColor: COLORS.primaryGreyHex,
    },
    CardLinearGradientContainer: {
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
    },
    CardOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: SPACING.space_20,
        gap: SPACING.space_30,
        paddingBottom: SPACING.space_10,
    },
    CardInLineContainer: {
        width: 'auto',
        height: 'auto',
        // paddingBottom: SPACING.space_20,
    },
    CardInLineContainer2: {
        width: '45%',
        height: 'auto',
    },
    CardInLineContainer3: {
        width: 'auto',
    },
    TitleText: {
        padding: SPACING.space_10,
        color: COLORS.primaryOrangeHex,
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_28,
    },
    PopularText: {
        padding: SPACING.space_10,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_extrabold,
        fontSize: FONTSIZE.size_20,
    },
    NumberText: {
        padding: SPACING.space_10,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_extrabold,
        fontSize: FONTSIZE.size_30,
    },
});

export default AdminScreen;
