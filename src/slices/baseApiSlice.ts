import { apiSlice } from "./apiSlice";

// Handle the response using the responseInterceptor
const handleResponse = (response: any) => {
	return response;
};

export const baseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/register`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		login: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/auth`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		adminLogin: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/admin/auth`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		updateUser: builder.mutation({
			query: (id) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/${id}`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		validateAccount: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/validate-account`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		verifyOtp: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/verifyOtp`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		resetPassword: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/reset-password`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		logout: builder.mutation({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/logout`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// "Authorization": `Bearer ${token }`,
				},
			}),
			transformResponse: handleResponse,
		}),

		fundWithCrypto: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/deposit/fund-crypto`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		allDeposits: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/deposit`,
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		approveDeposits: builder.query({
			query: (depositId) => ({
				url: `${import.meta.env.VITE_BASE_URL}/deposit/approve/${depositId}`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		declineDeposits: builder.query({
			query: (depositId) => ({
				url: `${import.meta.env.VITE_BASE_URL}/deposit/decline/${depositId}`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fundAsAdmin: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/deposit/fund-wallet`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		transferViaWallet: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/transfer`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		contact: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/contact-message`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),
		changePassword: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/change-password`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),
		feedback: builder.mutation({
			query: ({ data }: { data: any }) => ({
				url: `${import.meta.env.VITE_BASE_URL}/users/send-feedback`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		allUsers: builder.query({
			query: () => ({
				url: `${import.meta.env.VITE_BASE_URL}/users`,
				method: "Get",
				headers: {
					"Content-Type": "application/json",
				},
			}),
			transformResponse: handleResponse,
		}),

		fetchBitcoinDetails: builder.query({
			query: () => "https://api.coingecko.com/api/v3/coins/bitcoin",
			transformResponse: (response: any) => ({
				livePrice: response.market_data.current_price.usd,
				lastTradePrice: response.market_data.high_24h.usd, // Assuming high_24h is last trade price
				priceChange24h: response.market_data.price_change_percentage_24h,
				volume24h: response.market_data.total_volume.usd,
				activeTraders: response.market_data.circulating_supply, // Approximate metric
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterUserMutation,
	useValidateAccountMutation,
	useVerifyOtpMutation,
	useResetPasswordMutation,
	useLogoutMutation,
	useChangePasswordMutation,
	useFeedbackMutation,
	useFundWithCryptoMutation,
	useTransferViaWalletMutation,
	useAdminLoginMutation,
	useContactMutation,
	useFetchBitcoinDetailsQuery,
	useFundAsAdminMutation,
	useAllUsersQuery,
  useAllDepositsQuery,
  useLazyApproveDepositsQuery,
  useLazyDeclineDepositsQuery,
  useUpdateUserMutation,
} = baseApiSlice;
