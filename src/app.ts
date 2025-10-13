import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import passport from 'passport';
import './app/config/passport'
import cookieParser from "cookie-parser";
dotenv.config();

export const app = express();

app.use(cors({
  origin: 'https://amar-pay-frontend.vercel.app', // allow your frontend
  credentials: true, // if you send cookies
}));;

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...');
})

app.use(globalErrorHandler)