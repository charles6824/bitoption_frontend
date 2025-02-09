import { apiSlice } from "./apiSlice";


const handleResponse = (response: unknown) => {
    return response;
};

export const investmentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchUserInvestment: builder.query({
            query: () => ({
                url: `${import.meta.env.VITE_BASE_URL}/investments/user`,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            transformResponse: handleResponse,
        }),

        fetchAllInvestments: builder.query({
            query: () => ({
                url: `${import.meta.env.VITE_BASE_URL}/investments`,
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
    useFetchAllInvestmentsQuery,
    useFetchUserInvestmentQuery
} = investmentApiSlice;