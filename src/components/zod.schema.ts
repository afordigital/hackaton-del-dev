import { z } from "zod";

export const validationSchema = z.object({
  project_name: z.string().min(1, { message: "Campo requerido" }),
  project_description: z.string().min(12, { message: "Campo requerido" }),
  project_url: z
    .string()
    .min(1, { message: "Campo requerido" })
    .url()
    .includes("github.com", { message: "URL de GitHub no válida" }),
  participants: z.array(
    z.object({
      participant_name: z.string().min(1, { message: "Campo requerido" }),
      participant_country: z.string().min(1, { message: "Campo requerido" }),
      participant_email: z
        .string()
        .email({ message: "Email no válido" })
        .min(1, { message: "Campo requerido" }),
    })
  ),
});

export type FormType = z.infer<typeof validationSchema>;
export type ParticipantsType = z.infer<
  typeof validationSchema
>["participants"][0];
