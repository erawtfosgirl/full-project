import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import { productsApi } from "./products/productApi";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { categoriesApi } from "./categories/categoriesApi";

const store = configureStore({
    reducer: {
        'products': productSlice,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(categoriesApi.middleware)
    }
})

export default store;

type storeType = ReturnType<typeof store.getState>;

export const useSelectorCustom: TypedUseSelectorHook<storeType> = useSelector;