import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import axios from 'axios';
import { useStore } from '../store/store';

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {

  const UserName = useStore((state: any) => state.UserName);
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const FavoritesList = useStore((state: any) => state.FavoritesList);

  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                ToggleFavourite(favourite, type, id);
                console.log("we here yee");
                if(favourite==true){
                  try {
                    const {data} = await axios.put('http://10.80.4.212:8080/api/v3/auth/favRemove', {
                      UserName,
                      type,
                      id,
                    });
                    Alert.alert(data && data.message);
                  } catch (error: any) {
                    Alert.alert(error.response.data.message);
                    console.log(error);
                  }
                }
                if(favourite==false){
                  if (type == 'Coffee') {
                    for (let i = 0; i < CoffeeList.length; i++) {
                      if (CoffeeList[i].id == id) {
                        try {
                          let id = CoffeeList[i].id;
                          let name = CoffeeList[i].name;
                          let description = CoffeeList[i].description;
                          let roasted = CoffeeList[i].roasted;
                          let imagelink_square = CoffeeList[i].imagelink_square;
                          let imagelink_portrait = CoffeeList[i].imagelink_portrait;
                          let ingredients = CoffeeList[i].ingredients;
                          let special_ingredient = CoffeeList[i].special_ingredient;
                          let prices = CoffeeList[i].prices;
                          let average_rating = CoffeeList[i].average_rating;
                          let ratings_count = CoffeeList[i].ratings_count;
                          let favourite = true;
                          let type = CoffeeList[i].type;
                          let index = CoffeeList[i].index;
  
                          const {data} = await axios.post('http://10.80.4.212:8080/api/v3/auth/favSave',{
                            UserName,
                            id,
                            name,
                            description,
                            roasted,
                            imagelink_square,
                            imagelink_portrait,
                            ingredients,
                            special_ingredient,
                            prices,
                            average_rating,
                            ratings_count,
                            favourite,
                            type,
                            index,
                          });
                          Alert.alert(data && data.message);

                        } catch (error: any) {
                          Alert.alert(error.response.data.message);
                          console.log(error);
                        }
                      }
                    }
                  } else if (type == 'Bean') {
                    for (let i = 0; i < BeanList.length; i++) {
                      if (BeanList[i].id == id) {
                        try {
                          let id = BeanList[i].id;
                          let name = BeanList[i].name;
                          let description = BeanList[i].description;
                          let roasted = BeanList[i].roasted;
                          let imagelink_square = BeanList[i].imagelink_square;
                          let imagelink_portrait = BeanList[i].imagelink_portrait;
                          let ingredients = BeanList[i].ingredients;
                          let special_ingredient = BeanList[i].special_ingredient;
                          let prices = BeanList[i].prices;
                          let average_rating = BeanList[i].average_rating;
                          let ratings_count = BeanList[i].ratings_count;
                          let favourite = true;
                          let type = BeanList[i].type;
                          let index = BeanList[i].index;
  
                          const {data} = await axios.post('http://10.80.4.212:8080/api/v3/auth/favSave',{
                            UserName,
                            id,
                            name,
                            description,
                            roasted,
                            imagelink_square,
                            imagelink_portrait,
                            ingredients,
                            special_ingredient,
                            prices,
                            average_rating,
                            ratings_count,
                            favourite,
                            type,
                            index,
                          });
                          Alert.alert(data && data.message);

                        } catch (error: any) {
                          Alert.alert(error.response.data.message);
                          console.log(error);
                        }
                      }
                    }
                  }

                  console.log(JSON.stringify(FavoritesList));
                }  
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={async () => {
                ToggleFavourite(favourite, type, id);
                console.log("we here");
                if(favourite==true){
                  try {
                    const {data} = await axios.put('http://10.80.4.212:8080/api/v3/auth/favRemove', {
                      UserName,
                      type,
                      id,
                    });
                    Alert.alert(data && data.message);
                  } catch (error: any) {
                    Alert.alert(error.response.data.message);
                    console.log(error);
                  }
                }
                if(favourite==false){
                  if (type == 'Coffee') {
                    for (let i = 0; i < CoffeeList.length; i++) {
                      if (CoffeeList[i].id == id) {
                        try {
                          let id = CoffeeList[i].id;
                          let name = CoffeeList[i].name;
                          let description = CoffeeList[i].description;
                          let roasted = CoffeeList[i].roasted;
                          let imagelink_square = CoffeeList[i].imagelink_square;
                          let imagelink_portrait = CoffeeList[i].imagelink_portrait;
                          let ingredients = CoffeeList[i].ingredients;
                          let special_ingredient = CoffeeList[i].special_ingredient;
                          let prices = CoffeeList[i].prices;
                          let average_rating = CoffeeList[i].average_rating;
                          let ratings_count = CoffeeList[i].ratings_count;
                          let favourite = CoffeeList[i].favourite;
                          let type = CoffeeList[i].type;
                          let index = CoffeeList[i].index;
  
                          const {data} = await axios.post('http://10.80.4.212:8080/api/v3/auth/favSave',{
                            UserName,
                            id,
                            name,
                            description,
                            roasted,
                            imagelink_square,
                            imagelink_portrait,
                            ingredients,
                            special_ingredient,
                            prices,
                            average_rating,
                            ratings_count,
                            favourite,
                            type,
                            index,
                          });
                          Alert.alert(data && data.message);

                        } catch (error: any) {
                          Alert.alert(error.response.data.message);
                          console.log(error);
                        }
                      }
                    }
                  } else if (type == 'Bean') {
                    for (let i = 0; i < BeanList.length; i++) {
                      if (BeanList[i].id == id) {
                        try {
                          let id = BeanList[i].id;
                          let name = BeanList[i].name;
                          let description = BeanList[i].description;
                          let roasted = BeanList[i].roasted;
                          let imagelink_square = BeanList[i].imagelink_square;
                          let imagelink_portrait = BeanList[i].imagelink_portrait;
                          let ingredients = BeanList[i].ingredients;
                          let special_ingredient = BeanList[i].special_ingredient;
                          let prices = BeanList[i].prices;
                          let average_rating = BeanList[i].average_rating;
                          let ratings_count = BeanList[i].ratings_count;
                          let favourite = BeanList[i].favourite;
                          let type = BeanList[i].type;
                          let index = BeanList[i].index;
  
                          const {data} = await axios.post('http://10.80.4.212:8080/api/v3/auth/favSave',{
                            UserName,
                            id,
                            name,
                            description,
                            roasted,
                            imagelink_square,
                            imagelink_portrait,
                            ingredients,
                            special_ingredient,
                            prices,
                            average_rating,
                            ratings_count,
                            favourite,
                            type,
                            index,
                          });
                          Alert.alert(data && data.message);

                        } catch (error: any) {
                          Alert.alert(error.response.data.message);
                          console.log(error);
                        }
                      }
                    }
                  }

                  console.log(JSON.stringify(FavoritesList));
                }
              }}>
              <GradientBGIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcon
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  ProperFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  PropertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  PropertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  RoastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});

export default ImageBackgroundInfo;
