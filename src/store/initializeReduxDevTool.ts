import { registerInDevtools } from "pullstate";

const initializeReduxDevTool = () => {
  if (process.env.NODE_ENV !== "production") {
    // Add store here
    registerInDevtools({});
  }
};

export default initializeReduxDevTool;
