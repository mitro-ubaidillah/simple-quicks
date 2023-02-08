import { configureStore } from "@reduxjs/toolkit";

import chatReducer from './src/features/chatSection';

export default configureStore({
    reducer: {
        chats: chatReducer
    }
});