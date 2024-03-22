import { FC } from 'react'
import { RegisterForm } from '../zod.schema'
import { Input } from './Input'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
  useFieldArray
} from 'react-hook-form'
import { Plus, Trash } from 'lucide-react'

type Props = {
  control: Control<RegisterForm>
  register: UseFormRegister<RegisterForm>
  trigger: UseFormTrigger<RegisterForm>
  errors: FieldErrors<RegisterForm>['participants']
}

export const Participants: FC<Props> = ({
  register,
  control,
  errors,
  trigger
}) => {
  const {
    fields: participants,
    prepend: addParticipant,
    remove: removeParticipant
  } = useFieldArray({
    control,
    name: 'participants'
  })

  const handleAddParticipant = () => {
    trigger('participants').then((result) => {
      if (result) {
        addParticipant({
          participant_country: '',
          participant_email: '',
          participant_name: ''
        })
      }
    })
  }

  return (
    <>
      <div className="mt-12 flex justify-between items-center flex-wrap gap-8 xl:gap-0">
        <p className="font-bold pb-5 title-gradient text-3xl md:text-4xl xl:text-5xl">
          Participantes
        </p>
        <button
          type="button"
          onClick={handleAddParticipant}
          className="flex justify-between py-2 h-fit px-4 font-bold hover:bg-[#444444] w-fit rounded-[5px] bg-cSecondary border border-cTertiary"
        >
          <Plus />
          Añadir participante
        </button>
      </div>

      {participants.map((field, index) => {
        return (
          <div key={field.id}>
            {0 === index ? (
              <div className="flex flex-col gap-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Nombre*"
                    error={errors?.[index]?.participant_name}
                    id={`participants.${index}.participant_name`}
                    placeholder="Introduce tu nombre"
                    {...register(`participants.${index}.participant_name`)}
                  />

                  <Input
                    label="País*"
                    error={errors?.[index]?.participant_country}
                    id={`participants.${index}.participant_country`}
                    placeholder="Introduce tu país"
                    {...register(`participants.${index}.participant_country`)}
                  />
                </div>
                <Input
                  label="Email*"
                  error={errors?.[index]?.participant_email}
                  id={`participants.${index}.participant_email`}
                  placeholder="Introduce tu correo electrónico"
                  {...register(`participants.${index}.participant_email`)}
                />
              </div>
            ) : (
              <div className="flex py-6 px-5 bg-cSecondary text-cTertiary rounded-[5px] justify-between">
                <p>
                  {field.participant_name} · {field.participant_country} ·{' '}
                  {field.participant_email}
                </p>
                <Trash
                  className="hover:text-cWhite cursor-pointer"
                  onClick={() => {
                    removeParticipant(index)
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
