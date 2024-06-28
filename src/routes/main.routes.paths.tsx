import EditProducts from "../pages/editProducts/EditProducts";
import ProductsDetails from "../pages/productDetails/ProductsDetails";
import Products from "../pages/products/Products";

export const mainRoutePaths = [
  { name: "products", path: "/products", element: <Products /> },
  { name: null, path: "/products/:id", element: <ProductsDetails /> },
  { name: null, path: "/products/edit", element: <EditProducts /> },
];
