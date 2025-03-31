import React from "react";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const Modal = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  cancelText,
  confirmText,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro desenfocado */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2.5px] z-40 rounded-3xl"
        onClick={onClose}
      />

      {/* Contenido del modal */}
      <div className="relative z-50 bg-slate-200 w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        </div>

        <div>{children}</div>
        <div className="flex justify-between">
          <Button variant="secondary" onClick={onClose}>
            <span>{cancelText || "Cancelar"}</span>
          </Button>
          <Button onClick={onConfirm}>
            <span>{confirmText || "Confirmar"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
