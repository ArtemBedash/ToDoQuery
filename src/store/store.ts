import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import todosSlice from './slices/todos/todosSlice'
import {tasksApi} from "~/store/api/tasksApi.ts";

const rootReducer = combineReducers({
    todosSlice,
    [tasksApi.reducerPath]: tasksApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(tasksApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
