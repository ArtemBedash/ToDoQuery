import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


interface Task {
    id: string|number;
    text: string;
    completed: boolean;
    isEdited: boolean;
}

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => 'tasks',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Tasks' as const, id})),
                        {type: 'Tasks', id: 'LIST'},
                    ]
                    : [{type: 'Tasks', id: 'LIST'}],
        }),
        addTask: builder.mutation({
            query: (body) => ({
                url: 'tasks',
                method: 'POST',
                body,

            }),
            invalidatesTags: [{type: 'Tasks', id: 'LIST'}],
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Tasks', id: 'LIST'}],

        }),
        changeStatus: builder.mutation<Task, { task: Task }>({
            query: ({task}) => ({
                url: `tasks/${task.id}`,
                method: 'PUT',
                body: {...task, completed: !task.completed}
            }),
            invalidatesTags: [{type: 'Tasks', id: 'LIST'}],

        }),
        editTask:builder.mutation<Task,{task:Task}>({
            query:({task}) =>({
                url: `tasks/${task.id}`,
                method: 'PUT',
                body:{...task,isEdited:!task.isEdited}
            }),
            invalidatesTags: [{type: 'Tasks', id: 'LIST'}],

        }),
        updateTask:builder.mutation<Task,{task:Task}>({
            query:({task}) =>({
                url: `tasks/${task.id}`,
                method: 'PUT',
                body:{...task,isEdited:!task.isEdited}
            }),
            invalidatesTags: [{type: 'Tasks', id: 'LIST'}],

        })
    }),
});

export const {useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useChangeStatusMutation,useEditTaskMutation,useUpdateTaskMutation} = tasksApi;
