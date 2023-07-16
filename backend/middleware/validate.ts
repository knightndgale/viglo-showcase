import type { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

import * as z from "zod";

export interface ValidatedRequest<T> extends Request {
  validated: T;
}

const validate = <T extends z.ZodType<any>>(schema: z.ZodObject<any> | z.ZodType<any>) => {
  return (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const data = { ...req.body, ...req.query };
    if (schema.isOptional() && Object.keys(data).length === 0) {
      return next();
    }

    const validationResult = schema.safeParse(data) as z.SafeParseError<any> | any;

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;

      const errorMessage = `${Object.keys(errors)[0].toLocaleUpperCase()}: ${errors[Object.keys(errors)[0]]}`;

      return res.status(400).json({ message: errorMessage });
    }

    const validatedReq = req as unknown as ValidatedRequest<z.infer<T>>;
    validatedReq.validated = validationResult.data;

    return next();
  };
};

export default validate;
