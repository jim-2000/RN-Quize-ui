import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode:'light'
    },
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }

})

export const {toggleMode} = themeSlice.actions;
export const selectMode = (state) => state.theme.mode;

export default themeSlice.reducer;
 