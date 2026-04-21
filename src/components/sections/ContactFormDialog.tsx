"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FiX, FiCheckCircle, FiMail } from "react-icons/fi";
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
  const [successEmail, setSuccessEmail] = useState<string | null>(null);

  const handleSuccess = (email: string) => {
    setSuccessEmail(email);
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      // Reset success state when dialog closes
      setTimeout(() => setSuccessEmail(null), 300);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Panel */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl focus:outline-none">
          {/* Close button */}
          <Dialog.Close className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <FiX className="text-lg" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {successEmail ? (
            // Success state inside dialog
            <div className="bg-white rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-2xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-1">
                We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => handleOpenChange(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium"
              >
                <FiMail className="text-sm" />
                Done
              </button>
            </div>
          ) : (
            // The reusable form — no motion animation inside dialog
            <ContactForm
              onSuccess={handleSuccess}
              defaultService={defaultService}
              className="rounded-2xl shadow-none border-0"
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};