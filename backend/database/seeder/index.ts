import mongoose from "mongoose";
import TestModel from "../../models/TestModel/test.model";
import TestData from "../../database/data/test.data";
import config from "@/env";
mongoose
  .connect(config.databaseURI)
  .then(async () => {
    try {
      console.log("\n\n############################################");
      console.log("Seeding on: ", config.databaseURI);
      console.log("############################################\n");
    } catch (err) {
      console.log("ERROR" + err);
    } finally {
      console.log("SEEDING COMPLETE!");
      mongoose.connection.close();
    }
  })
  .catch((err: Error) => {
    throw new Error(err.message);
  });
