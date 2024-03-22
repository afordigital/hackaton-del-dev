import { FC } from "react";
import { Input } from "./Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormType } from "../../zod.schema";

type Props = {
  register: UseFormRegister<FormType>;
  errors: FieldErrors<FormType>;
}

export const ProjectForm: FC<Props> = ({ register, errors }) => {

  return (
    <>
      <Input
        label="Nombre del proyecto"
        placeholder="Introduce el nombre del proyecto"
        register={register}
        registerName="project_name"
        error={errors["project_name"]}
      />

      <Input
        label="Descripción"
        placeholder="Introduce una breve descripción explicativa..."
        register={register}
        registerName="project_description"
        error={errors["project_description"]}
      />

      <Input
        label="Repositorio de Github"
        placeholder="Introduce la URL de tu repositorio"
        register={register}
        registerName="project_url"
        error={errors["project_url"]}
      />
    </>


  )
}