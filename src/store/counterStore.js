import { createSlice } from '@reduxjs/toolkit';
 export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0
    },
    reducers: {
        increment: (state) => {                         
            state.value += 1
        },
        deccrement: (state) => {                         
            state.value -= 1
        },
        incrementByAmount: (state,action) => {                         
            state.value += action.payload
        },
    }
 })

    export const { increment, deccrement, incrementByAmount } = counterSlice.actions;
    export const selectValue = state => state.counter.value;
    export default counterSlice.reducer;