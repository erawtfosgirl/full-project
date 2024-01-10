import React from "react";
import { useGetCategoriesQuery } from "../store/categories/categoriesApi";
import { SelectFilterProps } from "../types/type";



const SelectFilter: React.FC<SelectFilterProps> = ({ selectCategoryName }) => {
    const { data, isLoading, isError } = useGetCategoriesQuery('');
    let content;
    if (isLoading) {
        content = 'Loading...'
    } else if (isError) {
        content = 'Error'
    } else {
        content = <select
            onChange={(e) => { selectCategoryName(e.target.value) }}
            defaultValue='electronics'
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            {data.map((item: string, index: number) => {
                return (<option key={index} value={item}>{item}</option>)
            })}
        </select>
    }
    return (
        <>
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Select category
            </label>
            {content}
        </>
    )
}

export default SelectFilter;