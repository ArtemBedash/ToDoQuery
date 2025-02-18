import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mainUrl, endpoints } from './endpoints';


export const registrationApi = createApi({
	reducerPath: 'registrationApi',
	baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
	tagTypes: ['registration'],
	endpoints: (build) => ({
		registration: build.mutation({
			query: (body: string ) => ({
				url: endpoints.registration,
				method: 'POST',
				body,
			}),
			// invalidatesTags:
		}),
	})
})

export const { useRegistrationMutation } = registrationApi