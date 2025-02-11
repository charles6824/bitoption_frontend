import { apiSlice } from "./apiSlice";


const handleResponse = (response: unknown) => {
	return response;
};

export const accountApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAccountBalance: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/accounts/balance`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		getAccountDetails: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/accounts/details`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		nameEnquiry: builder.query({
			query: (accountNumber) => ({
				url: `${import.meta.env.VITE_BASE_URL}/accounts/${accountNumber}`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),


	}),
});

export const {
	useGetAccountBalanceQuery,
    useGetAccountDetailsQuery,
    useLazyNameEnquiryQuery

} = accountApiSlice;