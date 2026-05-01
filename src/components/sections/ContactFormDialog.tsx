"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX } from "react-icons/fi";
import { ContactForm } from "@/components/sections/ContactForm";

interface ContactFormDialogProps {
  trigger: React.ReactNode;
  defaultService?: string;
}

export const ContactFormDialog: React.FC<ContactFormDialogProps> = ({
  trigger,
  defaultService,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    setOpen(false);
    router.push("/thankyou");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl focus:outline-none">
          <Dialog.Close className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <FiX className="text-lg" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <ContactForm
            onSuccess={handleSuccess}
            defaultService={defaultService}
            className="rounded-2xl shadow-none border-0"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};