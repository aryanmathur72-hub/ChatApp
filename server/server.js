import { app, server } from "./socket/socket.js";
import express from "express";
import { connectDB } from "./DB/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
connectDB();


app.use(cors({
  origin: ["https://chat-app-five-kappa-48.vercel.app"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// middlwares

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

server.listen(PORT, () => {
  console.log(`your server listening at port ${PORT}`);
});
