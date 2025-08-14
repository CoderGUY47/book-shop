import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PURGE,PERSIST,REGISTER} from 'redux-persist'
import userReducer from './slice/userSlice'
import { api } from './api'


//persist(user's data saved in local storage when reload and login) configuration for user
const userPersistConfig = {key: 'user', storage,whiteList: ['user', 'isEmailVerified', 'isLoggedIn']}

//wrap reducers with persist config
const persitedUserReducer = persistReducer(userPersistConfig, userReducer)

export const store = configureStore({
    reducer:{
        [api.reducerPath] : api.reducer, //rtk wuery api
        user: persitedUserReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH,REHYDRATE,PAUSE,PURGE,PERSIST,REGISTER],
            },
        }).concat(api.middleware)
})

//setup the listener for RTK Query
setupListeners(store.dispatch);

//create persist store
// Get the type of our store variable
export const persistor = persistStore(store);
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch