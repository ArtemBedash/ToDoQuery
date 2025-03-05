import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {tasksApi} from "~/store/api/tasksApi.ts";
import todosSlice from './slices/todos/todosSlice'
import {userDataApi} from "~/store/api/userDataApi.ts";


const rootReducer = combineReducers({
    todosSlice,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [userDataApi.reducerPath]: userDataApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(tasksApi.middleware).concat(userDataApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
