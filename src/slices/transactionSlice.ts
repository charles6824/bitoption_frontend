import { apiSlice } from "./apiSlice";

const handleResponse = (response: unknown) => {
	return response;
};

export const transactionApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchTransactions: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/transaction/user`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fetchCashFlow: builder.query({
			query: (period) => ({
				url: `${
					import.meta.env.VITE_BASE_URL
				}/transaction/cashflow?period=${period}`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),
	}),
});

export const { useFetchTransactionsQuery, useFetchCashFlowQuery } =
	transactionApiSlice;
