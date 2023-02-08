import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookies';

export const chatSlice = createSlice({
    name: 'chats',
    initialState: Cookies.getItem('chats') ? JSON.parse(Cookies.getItem('chats')) : [],
    reducers: {
        addChats: (state, action) => {
            const newChat = {
                id: action.payload.id,
                name: action.payload.name,
                message: action.payload.message,
                date: action.payload.date,
                time: action.payload.time,
            }
            state.push(newChat);
            Cookies.setItem('chats', JSON.stringify(state));
        }
    }
})

export const {addChats} = chatSlice.actions;
export default chatSlice.reducer;