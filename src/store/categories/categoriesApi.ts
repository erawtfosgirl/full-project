import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => 'products/categories'
        }),
        getProductsByCategory:build.query({
            query:(categoryName)=>'products/category/'+categoryName
        })
    })
})

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = categoriesApi;