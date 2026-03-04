import { useState, useEffect } from "react";

export function AlertDialog({ open, onOpenChange, children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80" onClick={() => { setIsOpen(false); onOpenChange?.(false); }} />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg">
        {children}
      </div>
    </>
  );
}

export function AlertDialogContent({ children, className }) {
  return <div className={`grid gap-1.5 p-6 text-center sm:text-left ${className || ''}`}>{children}</div>;
}

export function AlertDialogHeader({ children, className }) {
  return <div className={`flex flex-col space-y-2 ${className || ''}`}>{children}</div>;
}

export function AlertDialogTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ${className || ''}`}>{children}</h2>;
}

export function AlertDialogDescription({ children, className }) {
  return <p className={`text-sm text-muted-foreground ${className || ''}`}>{children}</p>;
}

export function AlertDialogFooter({ children, className }) {
  return <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ''}`}>{children}</div>;
}

export function AlertDialogAction({ children, className, onClick }) {
  return <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-10 px-4 py-2 ${className || ''}`} onClick={onClick}>{children}</button>;
}

export function AlertDialogCancel({ children, className, onClick }) {
  return <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium border h-10 px-4 py-2 mt-2 sm:mt-0 ${className || ''}`} onClick={onClick}>{children}</button>;
}
