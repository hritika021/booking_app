import { useState, useEffect } from "react";

export function Drawer({ open, onOpenChange, children, side = "bottom" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  if (!isOpen) return null;

  const positions = {
    top: "inset-x-0 top-0 w-full h-1/4",
    bottom: "inset-x-0 bottom-0 w-full h-1/4",
    left: "inset-y-0 left-0 w-1/4 h-full",
    right: "inset-y-0 right-0 w-1/4 h-full"
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80" onClick={() => { setIsOpen(false); onOpenChange?.(false); }} />
      <div className={`fixed z-50 gap-4 bg-background p-6 shadow-lg ${positions[side]}`}>
        {children}
      </div>
    </>
  );
}

export function DrawerContent({ children, className }) { return <div className={className}>{children}</div>; }
export function DrawerHeader({ children, className }) { return <div className={className}>{children}</div>; }
export function DrawerTitle({ children, className }) { return <h2 className={className}>{children}</h2>; }
export function DrawerDescription({ children, className }) { return <p className={className}>{children}</p>; }
export function DrawerFooter({ children, className }) { return <div className={className}>{children}</div>; }
export function DrawerClose({ className, ...props }) { return <button className={className} {...props}>×</button>; }
