import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/product-slice";
import { productsApi } from "./products/product-api";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        'products': productSlice,
        [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(productsApi.middleware)
    }
})

export default store;

type storeType = ReturnType<typeof store.getState>;

export const useSelectorCustom: TypedUseSelectorHook<storeType> = useSelector;