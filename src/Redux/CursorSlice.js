import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'default'
}

export const cursorSlice = createSlice({
    name: 'changeCursor',
    initialState,
    reducers: {
        removeCursor: (state) => {
            state.value = 'default'
        },
        cursorType: (state, action) => {
            state.value = action.payload
        }
    }
})


export const { removeCursor, cursorType } = cursorSlice.actions;

export default cursorSlice.reducer;