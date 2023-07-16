import path from "path";
import dotenv from "dotenv";

/**
 * Loads environment variables based on the current environment.
 * It looks for a .env file specific to the current NODE_ENV or falls back to ".env.development" if NODE_ENV is not defined.
 */
dotenv.config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV || "development"}`),
});

/**
 * The configuration object.
 * @type {Config}
 */
const config = {
  endpoint: `/api`,
  databaseURI: process.env.DATABASE_URI || "mongodb://localhost:27017/viglo",
};

export default config;
