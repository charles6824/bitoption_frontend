import { apiSlice } from "./apiSlice";

// Handle the response using the responseInterceptor
const handleResponse = (response: unknown) => {
	return response;
};

export const baseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/authentication/login`,
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
	useLoginMutation,
} = baseApiSlice;
