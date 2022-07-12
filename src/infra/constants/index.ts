import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const MONGO_DB = `${process.env.MONGO_URL}${process.env.MONGO_DATABASE}`;

export const HOST = `${process.env.HOST}:${PORT}`;
