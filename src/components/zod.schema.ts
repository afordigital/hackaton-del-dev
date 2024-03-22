import { z } from 'zod'

export const RegisterFormSchema = z.object({
  project_name: z.string().min(1, { message: 'Campo requerido' }),
  project_description: z.string().min(12, { message: 'Campo requerido' }),
  project_url: z
    .string()
    .min(1, { message: 'Campo requerido' })
    .url()
    .includes('github.com', { message: 'URL de GitHub no válida' }),
  participants: z.array(
    z.object({
      participant_name: z.string().min(1, { message: 'Campo requerido' }),
      participant_country: z.string().min(1, { message: 'Campo requerido' }),
      participant_email: z
        .string()
        .email({ message: 'Email no válido' })
        .min(1, { message: 'Campo requerido' }),
    }),
  ),
  terms_and_conditions: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
})

export type RegisterForm = z.infer<typeof RegisterFormSchema>
export type RegisterFormParticipants = z.infer<
  typeof RegisterFormSchema
>['participants'][0]
