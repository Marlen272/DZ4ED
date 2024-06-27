import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value = Math.max(0, state.value - action.payload);
        },
        reset: state => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;