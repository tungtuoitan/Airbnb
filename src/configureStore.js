import {configureStore, combineReducers} from '@reduxjs/toolkit'
import rootReducer from './reducer/reducer'
import firstReducer from './actions/first-slice'

const rooooootReducer = combineReducers({
  root:rootReducer,
      slice:firstReducer
})
const store = configureStore({
    reducer: rooooootReducer


  })
  
  export default store

