import { FieldError } from 'react-hook-form'
import { Info } from 'lucide-react'
import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  id: string
  label: string
  error: FieldError | undefined
}

export const Input = React.forwardRef(
  (
    { label, error, ...inputProps }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={inputProps.id}
          className={`font-[20px] font-bold ${
            error ? 'text-cRed' : 'text-cWhite'
          }  `}
        >
          {label}
        </label>
        <div
          className={`px-4 flex items-center bg-cSecondary rounded-[5px] ${
            error ? 'border border-cRed' : 'border border-transparent'
          }`}
        >
          <input
            ref={ref}
            className={`bg-transparent flex-1 font-[24px] outline-none placeholder:font-[24px] h-fit py-3`}
            autoComplete="off"
            {...inputProps}
          />
          {error && <Info className="text-cRed" />}
        </div>
        <span className="text-cRed font-semibold text-xs h-2">
          {error?.message}
        </span>
      </div>
    )
  }
)
