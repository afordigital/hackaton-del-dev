import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { RegisterForm, RegisterFormSchema } from "../zod.schema";
import { Participants } from "./components/Participants";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { ProjectForm } from "./components/ProjectForm";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_REGISTER_FORM_VALUES: RegisterForm = {
  project_name: "",
  project_description: "",
  project_url: "",
  participants: [
    {
      participant_name: "",
      participant_country: "",
      participant_email: "",
    },
  ],
  terms_and_conditions: false,
} as const;

export const Register = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    trigger,
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: DEFAULT_REGISTER_FORM_VALUES,
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      const participants = data.participants.map((participant) => ({
        participant_name: participant.participant_name,
        participant_country: participant.participant_country,
        participant_email: participant.participant_email,
        project_name: data.project_name,
        project_description: data.project_description,
        project_url: data.project_url,
      }));

      const { data: participantsData, error: participantsError } =
        await supabase.from("Participants").insert(participants);

      if (participantsError) {
        throw participantsError;
      }

      console.log("Participants Data:", participantsData);

      reset();
      toast.success("¡Felicidades! Acabas de registrar tu aplicación");
    } catch (error) {
      toast.error("Hubo un error al registrar la aplicación :(");
    }
  };

  return (
    <section className='flex flex-col w-full mt-10 pb-10 px-2'>
      <h1 className='w-fill text-center py-8 text-7xl font-bold title-gradient'>
        Regístrate
      </h1>
      <p className='mt-6 text-[18px]'>
        Aunque te hayas prescrito, debes registrarte con todos los datos que se
        solicitan en el formulario.
      </p>
      <p className='mt-2 text-[18px]'>
        Si quieres ver el resto de detalles, revisa{" "}
        <span className='text-cGreenText underline'>el reglamento</span> antes
        de enviar tu participación.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col mt-18 gap-y-7'
      >
        <ProjectForm register={register} errors={errors} />
        <Participants
          register={register}
          control={control}
          errors={errors.participants}
          trigger={trigger}
        />
        <TermsAndConditions register={register} errors={errors} />

        <button className='py-2 px-6 font-bold hover:bg-cGreenStroke w-fit rounded-[5px] bg-cGreenButton self-center'>
          Enviar participación
        </button>
      </form>
    </section>
  );
};
