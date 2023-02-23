import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e10dd8faa8msh24d1c264ac8404ap1cb8edjsn0bb96199ac87');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;