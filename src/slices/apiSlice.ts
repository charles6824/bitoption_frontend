import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";


const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      try {
        const parsedUserInfo = JSON.parse(userInfo);
        const token = parsedUserInfo?.data?.token;

        // If the token exists, add it to the Authorization header
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      } catch (error) {
        console.error("Error parsing sessionStorage userInfo:", error);
      }
    }

    // Set the content type
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Retry the request once if unauthorized
    const retryResult = await baseQuery(args, api, extraOptions);

    if (retryResult.error && retryResult.error.status === 401) {
      // Handle second 401 (logout the user)
      toast.error("Unauthorized. Redirecting to login.");
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("expirationTime");
      window.location.href = "/";
      return retryResult;
    }

    return retryResult;
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiService",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["base"],
  endpoints: () => ({}),
});