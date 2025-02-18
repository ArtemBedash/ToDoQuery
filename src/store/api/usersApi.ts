import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { usersUrl, endpoints } from './endpoints';
import { IUsersRequest, IUserResponse, IActiveUserResponse } from '~/types/api';


export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({ baseUrl: usersUrl }),
	tagTypes: ['users'],
	endpoints: (build) => ({
		getUsers: build.query<IUserResponse, IUsersRequest>({
			query: (data) => ({
			url: endpoints.users(data.page , data.per_page)
				
			})
		}),
		getActiveUser: build.query<IActiveUserResponse, number>({
			query: (id) => ({
			url: endpoints.user(id)
			})
		}),
		

	}),

			
})

export const {useGetUsersQuery, useGetActiveUserQuery} = usersApi