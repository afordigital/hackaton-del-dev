import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterForm } from '../zod.schema'

type Props = {
  register: UseFormRegister<RegisterForm>
  errors: FieldErrors<RegisterForm>
}

export const TermsAndConditions: FC<Props> = ({ register, errors }) => {
  return (
    <div>
      <p className="text-[18px] text-cTertiary">
        <input
          type="checkbox"
          className="mr-2"
          {...register('terms_and_conditions')}
        />
        Al enviar mi participación, confirmo que he leído y acepto los{' '}
        <a className="underline cursor-pointer">términos y condiciones</a> de
        privacidad.
      </p>
      <p>
        {errors.terms_and_conditions && (
          <span className="text-red-500 text-[14px]">
            {errors.terms_and_conditions.message}
          </span>
        )}
      </p>
    </div>
  )
}
