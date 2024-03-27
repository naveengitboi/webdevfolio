import { configureStore } from "@reduxjs/toolkit";
import cursorReducer  from './CursorSlice'

export const store = configureStore({
    reducer: {
        changeCursor: cursorReducer
    }
})
