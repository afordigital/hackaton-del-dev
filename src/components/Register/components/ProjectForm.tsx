import { FC } from 'react'
import { Input } from './Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterForm } from '../zod.schema'

type Props = {
  register: UseFormRegister<RegisterForm>
  errors: FieldErrors<RegisterForm>
}

export const ProjectForm: FC<Props> = ({ register, errors }) => {
  return (
    <>
      <Input
        id="project_name"
        label="Nombre del proyecto*"
        error={errors['project_name']}
        placeholder="Introduce el nombre del proyecto"
        {...register('project_name')}
      />

      <Input
        id="project_description"
        label="Descripción*"
        error={errors['project_description']}
        placeholder="Introduce una breve descripción explicativa..."
        {...register('project_description')}
      />

      <Input
        id="project_url"
        label="Repositorio de Github*"
        error={errors['project_url']}
        placeholder="Introduce la URL de tu repositorio"
        {...register('project_url')}
      />
    </>
  )
}
