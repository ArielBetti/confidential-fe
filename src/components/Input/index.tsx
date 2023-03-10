import { useId } from "react";

// types
import type { TInput } from "./types";

// ::
const Input = ({ label, ...rest }: TInput) => {
  const inputId = useId();

  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      {label && (
        <label className="" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        className="w-full placeholder:text-zinc-500 dark:bg-zinc-800 p-2 rounded-md shadow-sm text-xl"
        {...rest}
        id={inputId}
        name={inputId}
      />
    </div>
  );
};

export default Input;
