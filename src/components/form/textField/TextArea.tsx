import { Description, Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

export default function TextArea({
  id,
  value,
  defaultValue,
  onChange,
  label,
  description,
  placeholder,
  required,
  disabled,
}: TextAreaProps) {
  // Handle the change event
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange && !disabled) {
      onChange(event.target.value);
    }
  };

  return (
    <Field
      id={`textarea-${id}`}
      className={clsx("flex w-full flex-col gap-y-2")}
    >
      {label && (
        <Label
          id={`textarea-label-${id}`}
          className={clsx(
            "text-gray-900",
            // --- Disabled ---
            disabled && "text-gray-600",
          )}
        >
          {label} {required && <span className={clsx("text-red-600")}>*</span>}
        </Label>
      )}
      <Textarea
        id={`textarea-input-${id}`}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className={clsx(
          "h-10 w-full px-3 py-2",
          "text-gray-900 placeholder:text-gray-400",
          "rounded-md border border-gray-200",
          "shadow-sm transition-all duration-200",
          "outline-none",
          // --- Disabled ---
          disabled ? "cursor-not-allowed bg-gray-100" : "cursor-text bg-white",
        )}
      ></Textarea>
      {description && (
        <Description
          id={`textarea-description-${id}`}
          className={clsx(
            "text-sm",
            "text-gray-600",
            "transition-all duration-200",
          )}
        >
          {description}
        </Description>
      )}
    </Field>
  );
}

interface TextAreaProps {
  id?: string;
  value?: any;
  defaultValue?: any;
  onChange?: Function;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}
