import { baseApi } from "../../api/baseApi";

interface IProductArg {
  name: string;
  value: string | number;
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IProductArg) => {
            params.append(item.name, String(item.value));
          });
        }
        return { url: "/products", method: "GET", params };
      },
    }),
    getProductDetails: builder.query({
      query: (id) => {
        return { url: `/products/${id}`, method: "GET" };
      },
    }),
    updateProductData: builder.mutation({
      query: ({ id, data }) => {
        return { url: `/products/${id}`, method: "PATCH", body: data };
      },
      invalidatesTags: ["product"],
    }),
    deleteProductData: builder.mutation({
      query: ({ id }) => {
        console.log(id);
        return { url: `/products/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["product"],
    }),
  }),
});
