import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import { useGetProductsQuery } from "../store/products/productApi";
import { SingleProductType } from "../types/type";

function Home() {
    const { data, isLoading, isError } = useGetProductsQuery(0);
    const skeletonArray = Array.from({ length: 10 }, (_, index) => index)
    let content;
    if (isLoading) {
        content = (
            <div className="flex flex-wrap justify-between gap-y-5">
                {skeletonArray.map((_,index) => {
                    return (<Skeleton key={index} />)
                })}
            </div>
        );
    } else if (isError) {
        content = 'error'
    } else {
        content = (
            <div className="flex flex-wrap justify-between gap-y-5">
                {data.map((item: SingleProductType) => {
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

