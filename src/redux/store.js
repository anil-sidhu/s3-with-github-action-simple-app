import {configureStore} from '@reduxjs/toolkit'
 import counterReducer from './slice'
 import { userApi } from './userAPI'
 import productSlice from './productSlice'

export default configureStore(
    {
        reducer:{
            counter: counterReducer,
            products:productSlice,
            [userApi.reducerPath]: userApi.reducer
        },
         middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
    })
