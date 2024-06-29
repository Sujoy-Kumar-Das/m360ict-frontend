import { baseApi } from "../../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return { url: "/products/categories", method: "GET" };
      },
    }),
  }),
});
