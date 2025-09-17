import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user.slice";
import messageReducer from "./message/message.slice";
import socketReducer from "./slice/socket/socket.slice";

export const store = configureStore({
  reducer: {
    userReducer,
    messageReducer,
    socketReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: {
        ignoredPaths: ["socketReducer.socket"],
      },
    }),
});