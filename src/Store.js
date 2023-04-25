import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/BurgurApp/Counter/CounterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})