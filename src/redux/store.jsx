import { configureStore } from '@reduxjs/toolkit'
import ourCounterReducer from './counterReducer'

export default configureStore({
  reducer: {
    ReducerCount: ourCounterReducer
  },
})
