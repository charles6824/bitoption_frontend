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

		createPackage: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/packages`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		updatePackage: builder.mutation({
			query: ({ id, data }: { id: any; data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/packages/${id}`,
				method: "PUT",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		deletePackage: builder.mutation({
			query: ({ id }: { id: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/packages/${id}`,
				method: "DELETE",
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
	useCreatePackageMutation,
	useUpdatePackageMutation,
	useDeletePackageMutation,
} = packageApiSlice;
