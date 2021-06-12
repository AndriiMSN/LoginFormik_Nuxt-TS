import {createSlice} from '@reduxjs/toolkit'
import {DarkTheme} from "../../styles/Theme/dark";
import {LightTheme} from "../../styles/Theme/light";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        dark: true,
        theme: DarkTheme
    },
    reducers: {
        changeTheme: (state) => {
            state.dark = !state.dark
            state.theme = state.dark ? DarkTheme : LightTheme
        },
    },
})

export const currentTheme = (state) => state.theme

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer