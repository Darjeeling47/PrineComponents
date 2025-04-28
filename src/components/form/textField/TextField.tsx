import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function TextField({
  id,
  type,
  value,
  defaultValue,
  onChange,
  label,
  description,
  placeholder,
  required,
  disabled,
}: TextFieldProps) {
  // Handle the change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(event.target.value);
    }
  };

  return (
    <Field
      id={`textfield-${id}`}
      className={clsx("flex w-full flex-col gap-y-2")}
    >
      {label && (
        <Label
          id={`textfield-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Input
        id={`textfield-input-${id}`}
        type={type}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className={clsx(
          "h-10 w-full px-3 py-2",
          "text-gray-900 placeholder:text-gray-400",
          "rounded-md border border-gray-300",
          "shadow-sm transition-all duration-200",
          "outline-none",
          // --- Disabled ---
          disabled ? "cursor-not-allowed bg-gray-100" : "cursor-text bg-white",
        )}
      ></Input>
      {description && (
        <Description
          id={`textfield-description-${id}`}
          className={clsx(
            "text-sm",
            "text-gray-500",
            "transition-all duration-200",
          )}
        >
          {description}
        </Description>
      )}
    </Field>
  );
}

interface TextFieldProps {
  id?: string;
  type: string;
  value?: any;
  defaultValue?: any;
  onChange?: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}
