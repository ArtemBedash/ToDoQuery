import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface IUserData {
    id: string;
    firstName: string;
    lastName: string;
    company: string;
    birthDate: string;
    email: string;
}


export const userDataApi = createApi({
    reducerPath: "userDataApi",
    tagTypes: ['UserData'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),
    endpoints: (builder) => ({
        getData: builder.query<IUserData[], void>({
            query: () => 'data',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'UserData' as const, id})),
                        {type: 'UserData', id: 'LIST'},
                    ]
                    : [{type: 'UserData', id: 'LIST'}],
        }),

        addData: builder.mutation({
            query: (body) => ({
                url: 'data',
                method: 'POST',
                body,

            }),
            invalidatesTags: [{type: 'UserData', id: 'LIST'}],
        }),
        updateData: builder.mutation({
            query: (body) => ({
                url: `data/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{type: 'UserData', id: 'LIST'}],
        }),
    })

})

export const {useGetDataQuery,useAddDataMutation,useUpdateDataMutation} = userDataApi;