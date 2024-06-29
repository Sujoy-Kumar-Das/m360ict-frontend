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
  }),
});
