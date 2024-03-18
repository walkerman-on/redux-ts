import { useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"
import {store} from "./store/store"
import { AxiosInstance } from "axios"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface User {
    firstName: String,
    lastName: String
}

export interface Todo {
    id: string,
    text: string,
    complited: boolean
}

export interface TodoState {
    todos: Todo[]
}

export interface Post {
    title: string,
    id: string
}

export interface PostState {
    posts: Post[],
    loading: boolean,
    error: string | null 
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
