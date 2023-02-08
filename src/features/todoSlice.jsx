import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookies';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: Cookies.getItem('todod') ? JSON.parse(Cookies.getItem('todos')) : [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
                bookmark: action.payload.bookmark,
                completed: false,
                date: action.payload.time,
            }
            state.push(newChat);
            Cookies.setItem('chats', JSON.stringify(state));
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;