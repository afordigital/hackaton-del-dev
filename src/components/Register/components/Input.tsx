import { FieldError, UseFormRegister } from "react-hook-form";
import { FormType } from "../../zod.schema";
import { Info } from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  register: UseFormRegister<FormType>;
  registerName: Parameters<UseFormRegister<FormType>>[0];
  error: FieldError | undefined;
};

export const Input = ({
  label,
  placeholder,
  register,
  type,
  registerName,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="name"
        className={`font-[20px] font-bold ${
          error ? "text-cRed" : "text-cWhite"
        }  `}
      >
        {label}*
      </label>
      <div className={`px-4 flex items-center bg-cSecondary rounded-[5px] ${error ? "border border-cRed" : "border border-transparent"}`}>
      <input
        id="name"
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={`bg-transparent flex-1 font-[24px] outline-none placeholder:font-[24px] h-fit py-3` }
        {...register(registerName, {
          required: true,
        })}
        />
        {error && (
          <Info className="text-cRed" />
        )}
        </div>
      <span className="text-cRed font-semibold text-xs h-2">{error?.message}</span>
    </div>
  );
};
