import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "../../components/Account/AccountSlice";
import {useDispatch,TypedUseSelectorHook,useSelector} from 'react-redux';


export const store=configureStore({
    reducer:{
        account:AccountSlice.reducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;