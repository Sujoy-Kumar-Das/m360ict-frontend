import { productApi } from "../../redux/features/product/product.api";

export default function Products() {
  const { useGetAllProductsQuery } = productApi;
  const { data } = useGetAllProductsQuery(undefined);
  return <div>products</div>;
}
