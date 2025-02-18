import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todosSlice from './slices/todos/todosSlice'
// import auth from './slices/auth/auth'


const rootReducer = combineReducers({
  todosSlice
  // [registrationApi.reducerPath]: registrationApi.reducer,
  // auth
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware()
    //     .concat(registrationApi.middleware)
    //     .concat(usersApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
