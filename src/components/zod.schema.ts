import { z } from "zod";

export const validationSchema = z.object({
  project: z.array(
    z.object({
      project_name: z.string().min(1),
      project_description: z.string().min(24),
      github: z.string(),
    })
  ),
});

export type FormType = z.infer<typeof validationSchema>;
export type Project = z.infer<typeof validationSchema>["project"][0];
