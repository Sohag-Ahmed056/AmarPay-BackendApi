import { app } from "./app";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { enVars } from "./app/config/env";
import { createDefaultAdmin } from "./app/utils/seedAdmin";
dotenv.config()
const port = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  try {
    await mongoose.connect(enVars.MONGODB_URI)
    console.log('Mongodb connected.')
        await createDefaultAdmin();

    app.listen(port, () => {
      console.log(`🚀 http://localhost:${enVars.PORT}`);
    });
  } catch (error: any) {
    console.log('Error while connecting MongoDB', error.message)
  }
}


(async()=> {
  await startServer()
})()