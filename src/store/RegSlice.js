import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        name: '',
        surname: '',
        email: '',
    },
    errors: {},
};

const RegSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.formData.name = action.payload;
        },
        setSurname: (state, action) => {
            state.formData.surname = action.payload;
        },
        setEmail: (state, action) => {
            state.formData.email = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        resetForm: (state) => {
            state.formData = initialState.formData;
            state.errors = {};
        },
    },
});

export const { setName, setSurname, setEmail, setErrors, resetForm } = RegSlice.actions;

export const selectFormData = (state) => state.registration.formData;
export const selectErrors = (state) => state.registration.errors;

export default RegSlice.reducer;