import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormType, validationSchema } from "../zod.schema";
import { Participants } from "./components/Participants";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { ProjectForm } from "./components/ProjectForm";

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
    <section className="flex flex-col w-full mt-10 pb-10">
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
        <ProjectForm register={register} errors={errors} />
        <Participants control={control} errors={errors} trigger={trigger} register={register} />
        <TermsAndConditions register={register} errors={errors} />

        <button className="py-2 px-6 font-bold hover:bg-cGreenStroke w-fit rounded-[5px] bg-cGreenButton self-center">
          Enviar participación
        </button>
      </form>
    </section>
  );
};
