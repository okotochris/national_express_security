import { useState } from "react";

type Contact = {
  fullname: string;
  email: string;
  message: string;
  contact: string;
};

export function useHandleEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmail = async (e: React.FormEvent, formData: Contact) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const result = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (result.ok) {
        const resMsg = await result.json();
        setMessage(resMsg.msg || "Message sent successfully!");
      } else {
        setMessage("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleEmail, isLoading, message };
}
