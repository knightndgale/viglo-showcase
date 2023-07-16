import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import database from "../../../backend/database";
import testController from "../../../backend/controller/test.controller";

export const router = createRouter<NextApiRequest, NextApiResponse>();

const RequestHandler = () => {
  router
    .use(database)
    .use(async (req, res, next) => {
      const start = Date.now();
      await next(); // call next in chain
      const end = Date.now();
      console.log(`Request took ${end - start}ms: ${req.url}`);
    })
    .get("api/test-api", (req, res) => {
      res.send("Testing API \nHello World!");
    });

  testController("api/test", router);

  return router.handler({
    onError: (err: any, req, res) => {
      console.log("🚀 ~ RequestHandler ~ Error:", err);
      console.error(err.stack);
    },
    onNoMatch: (req, res) => {
      console.log("🚀 ~ Error ~ URL not found!", req.url);
      res.status(404).end("URL not found");
    },
  });
};

export default RequestHandler();
