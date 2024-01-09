import { useGetProductsQuery } from "../store/products/product-api";

function Home() {
    const {data,isLoading,isError}=useGetProductsQuery(0);
    let content;
    if(isLoading){
        content='loading'
    }else if(isError){
        content='error'
    }else{
        content=data;
    }

    console.log(content);
    
    return (
        <>
            <h1 className="text-center">Home Page</h1>
        </>
    )
}

export default Home;

