import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slices/productsSlice'
import commentsReducer from '../slices/commentsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch