"use client";

import { Button, TextInput } from "@/shared/ui";
import { useState } from "react";

export const ContactForm = ({ className = "" }: { className?: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange =
    (field: keyof typeof formData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <form className={`flex flex-col  gap-[32px] justify-between ${className}`}>
      <div className="w-full flex flex-col gap-[24px]">
        <TextInput
          type="text"
          icon="/input-icon-name.svg"
          placeholder="Как к вам обращаться?"
          value={formData.name}
          onChange={handleInputChange("name")}
          name="name"
          required
        />
        <TextInput
          type="email"
          icon="/input-icon-email.svg"
          placeholder="Ваш электронный адрес"
          value={formData.email}
          onChange={handleInputChange("email")}
          name="email"
          required
        />
        <TextInput
          type="textarea"
          icon="/input-icon-message.svg"
          placeholder="Опишите ваш вопрос"
          value={formData.message}
          onChange={handleInputChange("message")}
          name="message"
          required
        />
      </div>
      <Button size="lg">Отправить сообщение</Button>
    </form>
  );
};
