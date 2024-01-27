import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAdminStore = create(
    persist(
        (set, get) => ({
            AdminLoggedIn: '',
            FavoritesList: [],
            OrderHistoryList: [],

            setFavInfo: (FavoritesList: any) =>
                set(
                    produce( state=> {
                        state.FavoritesList = FavoritesList.favlist;
                        state.AdminLoggedIn = 'true';
                    }),
                ),
            setOrderHistoryInfo: (OrderHistoryList: any ) =>
                set(
                    produce( state=> {
                        state.OrderHistoryList = OrderHistoryList.orderhistory;
                    }),
                ),
        }),
        {
            name: 'coffee-app-admin',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);