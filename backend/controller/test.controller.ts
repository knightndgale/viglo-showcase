import type { NextApiRequest, NextApiResponse, Route } from "next";
import { NodeRouter } from "next-connect/dist/types/node";
import TestRepository from "@/repository/TestRepository";
import TestService from "@/service/TestService/test.service";

class TestController {
  async get(req: NextApiRequest, res: NextApiResponse) {
    const testRepository = new TestRepository();
    const testService = new TestService(testRepository);
    const result = await testService.Tests();
    if (result instanceof Error) {
      return res.status(500).send("Unable to get test data");
    }
    return res.status(200).json({ message: "Configuration Complete", testData: result });
  }
  async getAll(req: NextApiRequest, res: NextApiResponse) {}
  async getBy(req: NextApiRequest, res: NextApiResponse) {}
  async find(req: NextApiRequest, res: NextApiResponse) {}
  async create(req: NextApiRequest, res: NextApiResponse) {}
  async put(req: NextApiRequest, res: NextApiResponse) {}
  async patch(req: NextApiRequest, res: NextApiResponse) {}
  async delete(req: NextApiRequest, res: NextApiResponse) {}
}

const setRouter = async (route: string, router: NodeRouter<NextApiRequest, NextApiResponse>) => {
  const testController = new TestController();
  await router.get(`${route}/testing-process`, testController.get);

  return router;
};

export default setRouter;
