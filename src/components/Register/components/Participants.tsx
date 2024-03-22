import { FC } from "react";
import { FormType } from "../../zod.schema";
import { Input } from "./Input";
import { Control, FieldErrors, UseFormRegister, UseFormTrigger, useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";

type Props = {
  control: Control<FormType>;
  register: UseFormRegister<FormType>;
  trigger: UseFormTrigger<FormType>;
  errors: FieldErrors<FormType>;
}

export const Participants: FC<Props> = ({control, register, trigger, errors}) => {

  const { fields, prepend, remove } = useFieldArray({
    control,
    name: "participants",
  });

  const handleAddParticipant = () => {
    trigger('participants').then((result) => {
      if (result) {
        prepend({ participant_country: "", participant_email: "", participant_name: "" })
      }
    });
  }

  return (
    <>
      <div className="mt-12 flex justify-between items-center">
          <p className="text-5xl font-bold pb-5 title-gradient">Participantes</p>
          <button
            type="button"
            onClick={handleAddParticipant}
            className="flex justify-between py-2 h-fit px-4 font-bold hover:bg-[#444444] w-fit rounded-[5px] bg-cSecondary border border-cTertiary">
            <Plus />
            Añadir participante
          </button>
        </div>

        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              {
                0 === index ? (
                  <div className="flex flex-col gap-y-7">
                    <div className="grid grid-cols-2 gap-x-8">
                      <Input
                        label="Nombre"
                        placeholder="Introduce tu nombre"
                        register={register}
                        registerName={`participants.${index}.participant_name`}
                        error={errors.participants?.[index]?.participant_name}
                      />

                      <Input
                        label="País"
                        placeholder="Introduce tu país"
                        register={register}
                        registerName={`participants.${index}.participant_country`}
                        error={
                          errors.participants?.[index]?.participant_country
                        }
                      />
                    </div>
                    <Input
                      label="Email"
                      placeholder="Introduce tu correo electrónico"
                      register={register}
                      registerName={`participants.${index}.participant_email`}
                      error={errors.participants?.[index]?.participant_email}
                    />
                  </div>

                ) : (
                  <div className="flex py-6 px-5 bg-cSecondary text-cTertiary rounded-[5px] justify-between">
                    <p>
                      {item.participant_name} · {item.participant_country} · {item.participant_email}
                    </p>
                    <Trash className="hover:text-cWhite cursor-pointer" onClick={() => {
                      remove(index)
                    }} />
                  </div>
                )
              }
            </div>
          )
        })}
    
    </>
  )
}