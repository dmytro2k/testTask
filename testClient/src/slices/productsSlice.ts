import { createSlice } from '@reduxjs/toolkit'
import { type Product } from '../types'

type ProductsState = Product[]

const initialState: ProductsState = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
})

export const { } = productsSlice.actions
export default productsSlice.reducer