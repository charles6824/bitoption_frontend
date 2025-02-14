import { apiSlice } from "./apiSlice";

// Handle the response using the responseInterceptor
const handleResponse = (response: any) => {
    return response;
};

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        changePassword: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/admin/change-password`,
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
   useChangePasswordMutation
} = adminApiSlice;
