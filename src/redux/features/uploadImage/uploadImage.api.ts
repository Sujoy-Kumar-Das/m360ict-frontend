import { baseApi } from "../../api/baseApi";

export const uploadImageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (data) => {
        console.log(data);
        const formData = new FormData();
        // data.forEach((file: File) => {
        //   formData.append("files[]", file);
        // });
        formData.append("image", formData);

        return {
          url: `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_REACT_APP_image_upload_api_key
          }`,
          body: data,
        };
      },
    }),
  }),
});
