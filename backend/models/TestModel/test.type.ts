import { TestSchema } from "@/schema/test.schema";
import * as z from "zod";

export type TestType = z.infer<typeof TestSchema>;
