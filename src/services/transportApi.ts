import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transportApi = createApi({
  reducerPath: "transportApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({
    getRouteSuggestions: builder.query<string[], { from: string; to: string }>({
      query: ({ from, to }) => `/routes?from=${from}&to=${to}`,
    }),
    getRealTimeData: builder.query<any, { location: string }>({
      query: (location) => `/realtime/${location}`,
    }),
  }),
});

export const { useGetRouteSuggestionsQuery, useGetRealTimeDataQuery } =
  transportApi;
