import { UseFormRegister } from "react-hook-form";
import { FormType } from "../zod.schema";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  register: UseFormRegister<FormType>;
  registerName: Parameters<UseFormRegister<FormType>>[0];
  error: string | undefined;
};

export const Input = ({
  label,
  placeholder,
  register,
  registerName,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="name"
        className={`font-[20px] font-bold ${
          error ? "text-red-600" : "text-cWhite"
        }  `}
      >
        {label}*
      </label>
      <input
        id="name"
        placeholder={placeholder}
        autoComplete="off"
        className={`bg-cSecondary font-[24px] outline-none placeholder:font-[24px] h-[72px] px-4 rounded-[5px] ${
          error ? "border border-red-600" : "border border-transparent"
        }  `}
        {...register(registerName, {
          required: true,
        })}
      />
      {error && <span className="text-red-600 font-bold">{error}</span>}
    </div>
  );
};
