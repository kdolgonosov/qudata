"use client";

import { useState } from "react";

type InputType = "text" | "email" | "textarea";

interface TextInputProps {
  type?: InputType;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  required?: boolean;
}

export const TextInput = ({
  type = "text",
  Icon,
  placeholder = "Введите текст",
  value: controlledValue,
  onChange,
  name,
  required = false,
}: TextInputProps) => {
  const [internalValue, setInternalValue] = useState("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  // const isTextarea = type === "textarea";

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6">
        {Icon && <Icon width={24} height={24} />}
      </div>
      {/* {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full pl-[72px] py-[24px] pr-4 text-[20px] border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full pl-[72px] py-[24px] pr-4 text-[20px] border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={placeholder}
          required={required}
        />
      )} */}

      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full pl-[72px] py-[24px] pr-4 text-[20px] text-dimmed-50 border border-dimmed-50 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#4254FF] focus:border-transparent"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
