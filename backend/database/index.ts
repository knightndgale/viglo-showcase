import config from "@/env";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

const dbConnect = (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  if (mongoose.connection.readyState >= 1) {
    next();
    return;
  }

  mongoose
    .connect(config.databaseURI)
    .then(() => {
      console.log(`You are now connected to: ${config.databaseURI}`);
    })
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => next());
};

export default dbConnect;
