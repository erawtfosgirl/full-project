export type SingleProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface ProductsType {
    products: SingleProductType[]
}

export interface SelectFilterProps {
    selectCategoryName: (value: string) => void;
}