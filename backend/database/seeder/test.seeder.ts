import TestModel from "../../models/TestModel/test.model";
import mongoose from "mongoose";
import path from "path";
import testData from "../data/test.data";
require("dotenv").config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV || "development"}`),
});

const seed = () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(async () => {
      try {
        console.log("\n\n############################################");
        console.log("Seeding on: ", process.env.DATABASE_URI);
        console.log("############################################\n");
        console.log("Test Seeding ...");
        await TestModel.insertMany(testData);
        console.log("Seeding Test Completed");
        console.log("----------------------");
      } catch (err) {
        console.log("ERROR", err);
      } finally {
        console.log("SEEDING COMPLETE!");
        mongoose.connection.close();
      }
    })
    .catch(() => {
      console.log("Error seeding! Please try again later!");
    });
};

seed();
