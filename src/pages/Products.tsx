import Card from "../components/Card";
import SelectFilter from "../components/SelectFilter";
import Skeleton from "../components/Skeleton";
import { useGetProductsByCategoryQuery } from "../store/categories/categoriesApi";
import { SingleProductType } from "../types/type";

function Products() {
   const { data, isLoading, isError } = useGetProductsByCategoryQuery('electronics');
   const skeletonArray = Array.from({ length: 10 }, (_, index) => index)
   let content;
   if (isLoading) {
      content = (
         <div className="flex flex-wrap justify-between gap-y-5">
            {skeletonArray.map((_, index) => {
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
         <h1 className="text-center py-5">Products Page</h1>
         <div className="flex justify-end items-center gap-x-2 my-5">
            <SelectFilter />
         </div>
         {content}
      </>
   )
}

export default Products;