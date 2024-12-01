import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    dummyObj: {},
    dummyArray: [],
}
const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        addObj: (state, action) => {
            state.dummyObj = { ...state.dummyObj, ...action.payload }
        },
        addArray: (state, action) => {
            state.dummyArray = [...state.dummyArray, ...action.payload]
        }
    }
})

export const { addObj, addArray } = apiSlice.actions
const apiReducer = apiSlice.reducer
export default apiReducer