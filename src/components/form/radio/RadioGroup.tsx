import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";

export default function RadioGroup({
  id,
  value,
  onChange,
  children,
  className,
}: RadioGroupProps) {
  return (
    <HeadlessRadioGroup
      id={`radioGroup-${id}`}
      value={value}
      onChange={onChange}
      className={className}
    >
      {children}
    </HeadlessRadioGroup>
  );
}

interface RadioGroupProps {
  id?: string;
  value: any;
  onChange: (value: any) => void;
  children: React.ReactNode;
  className?: string;
}
