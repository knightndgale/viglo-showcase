import * as z from "zod";

export const TestSchema = z.object({
  name: z.string(),
  email: z.string(),
});
