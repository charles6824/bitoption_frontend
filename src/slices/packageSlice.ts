import { apiSlice } from "./apiSlice";


const handleResponse = (response: unknown) => {
    return response;
};

export const packageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPackages: builder.query({
            query: () => ({
                url: `${import.meta.env.VITE_BASE_URL}/packages`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: handleResponse,
        }),

        getSinglePackage: builder.query({
            query: (id) => ({
                url: `${import.meta.env.VITE_BASE_URL}/packages/${id}`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: handleResponse,
        }),

        buyPackage: builder.mutation({
          query: ({ data }: { data: any }) => ({
            url: `${import.meta.env.VITE_BASE_URL}/investments`,
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json",
            },
          }),
          transformResponse: handleResponse,
        }),
   

    }),
});

export const {
    useGetAllPackagesQuery,
    useGetSinglePackageQuery,
    useBuyPackageMutation,
} = packageApiSlice;