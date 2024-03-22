import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormType, validationSchema } from "../zod.schema";
import { Input } from "./components/Input";
import { Participants } from "./components/Participants";

const defaultValues = {
  participants: [
    {
      participant_name: "",
      participant_country: "",
      participant_email: "",
    },
  ],
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    trigger,
  } = useForm<FormType>({
    mode: 'all',
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValues,
  });


  const onSubmit = (data: FormType) => {
    console.log("data", data);
    reset();
    toast.success("¡Felicidades! Acabas de registrar tu aplicación");
  };


  return (
    <section className="flex flex-col w-full mt-10 pb-20">
      <h1 className="w-fill text-center py-8 text-7xl font-bold title-gradient">
        Regístrate
      </h1>
      <p className="mt-6 text-[18px]">
        Aunque te hayas prescrito, debes registrarte con todos los datos que se
        solicitan en el formulario.
      </p>
      <p className="mt-2 text-[18px]">
        Si quieres ver el resto de detalles, revisa{" "}
        <span className="text-cGreenText underline">el reglamento</span> antes de enviar tu
        participación.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-18 gap-y-7"
      >
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

        <Participants control={control} errors={errors} trigger={trigger} register={register} />

        <p className="text-[18px] text-cTertiary">
          <input type="checkbox" className="mr-2" />
          Al enviar mi participación, confirmo que he leído y acepto los{' '}
          <a className="underline">términos y condiciones</a> de privacidad.
        </p>
        <button className="py-2 px-6 font-bold hover:bg-cGreenStroke w-fit rounded-[5px] bg-cGreenButton self-center">
          Enviar participación
        </button>
      </form>
    </section>
  );
};
