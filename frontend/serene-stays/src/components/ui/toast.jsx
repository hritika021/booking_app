import { useState, useEffect } from "react";

export function ToastProvider({ children }) {
  return <div>{children}</div>;
}

export function Toast({ open, onOpenChange, children, className }) {
  const [isOpen, setIsOpen] = useState(open || false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  if (!isOpen) return null;

  return <div className={`fixed bottom-4 right-4 z-50 w-96 rounded-md border bg-background p-4 shadow-lg ${className || ''}`}>{children}</div>;
}

export function ToastTitle({ children, className }) {
  return <div className={`font-semibold ${className || ''}`}>{children}</div>;
}

export function ToastDescription({ children, className }) {
  return <div className={`text-sm ${className || ''}`}>{children}</div>;
}

export function ToastClose({ className, onClick }) {
  return <button className={`absolute right-2 top-2 ${className || ''}`} onClick={onClick}>×</button>;
}

export function ToastViewport({ className }) {
  return <div className={`fixed bottom-0 right-0 flex flex-col p-4 ${className || ''}`} />;
}

export function useToast() {
  const [toasts, setToasts] = useState([]);
  
  const toast = (props) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...props, id }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000);
  };

  return { toast, toasts };
}
