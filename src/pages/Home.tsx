import { useSelectorCustom } from "../store/store";

function Home() {
    const { products } = useSelectorCustom(state => state.products);
    console.log(products);

    return (
        <>
            <h1 className="text-center">Home Page</h1>
        </>
    )
}

export default Home;

