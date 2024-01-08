import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../../types/type";

const initialState: ProductsType = {
    products: [
        {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        }
    ]
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer;