import { createSlice } from '@reduxjs/toolkit'
import { type Comment } from '../types'

type CommentsState = Comment[]

const initialState: CommentsState = []

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {

  },
})

export const { } = commentsSlice.actions
export default commentsSlice.reducer