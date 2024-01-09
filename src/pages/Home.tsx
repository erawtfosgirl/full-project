import Card from "../components/Card";
import { useGetProductsQuery } from "../store/products/product-api";
import { SingleProductType } from "../types/type";

function Home() {
    const { data, isLoading, isError } = useGetProductsQuery(0);
    let content;
    if (isLoading) {
        content = 'loading'
    } else if (isError) {
        content = 'error'
    } else {
        content = (
            <div className="flex flex-wrap justify-between gap-y-5">
                {data.map((item:SingleProductType) => {
                    return (<Card key={item.id} item={item} />)
                })}
            </div>
        );
    }


    return (
        <>
            <h1 className="text-center">Home Page</h1>
            {content}
        </>
    )
}

export default Home;

