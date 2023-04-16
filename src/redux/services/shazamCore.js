import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({

    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7de244e443msh8df919454f2a8d8p176dcdjsn9cf718ffb91a')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/world"}),
        getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`})
    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery
} = shazamCoreApi