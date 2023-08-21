import {createSlice} from '@reduxjs/toolkit'

const sliceName = createSlice({
    name:'firstSlice',
    initialState:0,
    reducers:{
        action1:(state,action) =>{
            console.log('hi from slice')
            return {...state,}
        }
    }
})
export const {action1} = sliceName.actions
const firstReducer = sliceName.reducer
export default firstReducer