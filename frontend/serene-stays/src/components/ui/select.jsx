export function Select({ children, className, ...props }) {
  return (
    <div className={className}>
      <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm" {...props}>
        {children}
      </select>
    </div>
  );
}

export function SelectTrigger({ children, className }) {
  return <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ${className || ''}`}>{children}</div>;
}

export function SelectContent({ children, className }) {
  return <div className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md ${className || ''}`}>{children}</div>;
}

export function SelectItem({ children, className, ...props }) {
  return <div className={`flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm ${className || ''}`} {...props}>{children}</div>;
}

export function SelectValue({ children, ...props }) {
  return <span {...props}>{children}</span>;
}
