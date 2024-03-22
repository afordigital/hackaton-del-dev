import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormType, ParticipantsType, validationSchema } from "./zod.schema";
import { Input } from "./common/Input";

export const Register = () => {
  const FernandoAlonso = {
    participants: [
      {
        participant_name: "",
        participant_country: "",
        participant_email: "",
      } as ParticipantsType,
    ],
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormType>({
    resolver: zodResolver(validationSchema),
    defaultValues: FernandoAlonso,
  });

  const { fields } = useFieldArray({
    control,
    name: "participants",
  });

  const onSubmit = (data: FormType) => {
    console.log("data", data);
    reset();
    toast.success("¡Felicidades! Acabas de registrar tu aplicación");
  };

  return (
    <section className="flex flex-col w-full my-6 md:my-16 xl:my-20 pb-20 px-8 xl:px-0 lg:px-4">
      <h1 className="w-fill text-center py-8 text-5xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#EEF1F0] to-[#999999] mb-4 md:mb-12">
        Regístrate
      </h1>
      <div className="space-y-4 xl:space-y-2">
        <p className="text-lg font-bold">
          Aunque te hayas prescrito, debes registrarte con todos los datos que se
          solicitan en el formulario.
        </p>
        <p className="text-md font-bold md:text-lg">
          Si quieres ver el resto de detalles, revisa{" "}
          <a className="text-cGreenText">el reglamento</a> ants de enviar tu
          participación
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-6 gap-y-8"
      >
        <Input
          label="Nombre del proyecto"
          placeholder="Introduce el nombre del proyecto"
          register={register}
          registerName="project_name"
          error={errors["project_name"]?.message}
        />

        <Input
          label="Descripción del proyecto"
          placeholder="Introduce una breve descripción explicativa..."
          register={register}
          registerName="project_description"
          error={errors["project_description"]?.message}
        />

        <Input
          label="Repositorio de Github"
          placeholder="Introduce la URL de tu repositorio"
          register={register}
          registerName="project_url"
          error={errors["project_url"]?.message}
        />

        <p className="text-3xl md:text-4xl xl:text-5xl font-bold py-8">Participantes</p>

        {fields.map((item, index) => {
          return (
            <>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="Nombre del participante"
                  placeholder="Introduce el nombre del participante"
                  register={register}
                  registerName={`participants.${index}.participant_name`}
                  error={errors.participants?.[index]?.participant_name?.message}
                />

                <Input
                  label="País"
                  placeholder="Introduce tu país de residencia"
                  register={register}
                  registerName={`participants.${index}.participant_country`}
                  error={
                    errors.participants?.[index]?.participant_country?.message
                  }
                />
              </div>

              <Input
                label="Email"
                placeholder="Introduce tu correo electrónico"
                register={register}
                registerName={`participants.${index}.participant_email`}
                error={errors.participants?.[index]?.participant_email?.message}
              />
            </>
          );
        })}

        <button className="py-2 px-6 font-bold hover:bg-green-6 w-fit rounded-[5px] bg-cGreenButton border-cGreenStroke">
          Registrarme
        </button>
      </form>
    </section>
  );
};
