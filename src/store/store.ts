import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/product-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        'products': productSlice
    }
})

export default store;

type storeType = ReturnType<typeof store.getState>;

export const useSelectorCustom: TypedUseSelectorHook<storeType> = useSelector;