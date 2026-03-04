import { useState, useEffect } from "react";

export function Dialog({ open, onOpenChange, children }) {
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

export function DialogContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function DialogHeader({ children, className }) {
  return <div className={`flex flex-col space-y-2 ${className || ''}`}>{children}</div>;
}

export function DialogTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ${className || ''}`}>{children}</h2>;
}

export function DialogDescription({ children, className }) {
  return <p className={`text-sm text-muted-foreground ${className || ''}`}>{children}</p>;
}

export function DialogFooter({ children, className }) {
  return <div className={`flex justify-end gap-2 mt-4 ${className || ''}`}>{children}</div>;
}
