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

	}),
});

export const {
	useLoginMutation,
	useRegisterUserMutation,
	useValidateAccountMutation,
	useVerifyOtpMutation,
	useResetPasswordMutation,
	useLogoutMutation,
    useFundWithCryptoMutation,
    useTransferViaWalletMutation,
    useAdminLoginMutation,
	useContactMutation
} = baseApiSlice;
