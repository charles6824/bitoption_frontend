import { apiSlice } from "./apiSlice";

const handleResponse = (response: unknown) => {
	return response;
};

export const withdrawalApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		initiateWithdrawal: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/initiate`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fetchAllWithdrawals: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fetchUserWithdrawals: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/user`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fetchSingleWithdrawal: builder.query({
			query: (id) => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/${id}`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		sendOTP: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/verify-otp`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		approveWithdrawal: builder.mutation({
			query: (id) => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/${id}/approve`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		declineWithdrawal: builder.mutation({
			query: (id) => ({
				url: `${import.meta.env.VITE_BASE_URL}/withdrawal/${id}/decline`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),
	}),
});

export const {
	useInitiateWithdrawalMutation,
	useFetchAllWithdrawalsQuery,
	useFetchUserWithdrawalsQuery,
	useFetchSingleWithdrawalQuery,
	useApproveWithdrawalMutation,
	useDeclineWithdrawalMutation,
	useLazySendOTPQuery,
} = withdrawalApiSlice;
