export function DropdownMenu({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuTrigger({ children, className }) {
  return <button className={className}>{children}</button>;
}

export function DropdownMenuContent({ children, className }) {
  return <div className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 ${className || ''}`}>{children}</div>;
}

export function DropdownMenuItem({ children, className }) {
  return <div className={`flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm ${className || ''}`}>{children}</div>;
}

export function DropdownMenuLabel({ children, className }) {
  return <div className={`px-2 py-1.5 text-sm font-semibold ${className || ''}`}>{children}</div>;
}

export function DropdownMenuSeparator({ className }) {
  return <div className={`-mx-1 my-1 h-px bg-muted ${className || ''}`} />;
}

export function DropdownMenuGroup({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function DropdownMenuRadioGroup({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuRadioItem({ children, className }) {
  return <div className={`flex cursor-default items-center rounded-sm py-1.5 pl-8 pr-2 text-sm ${className || ''}`}>{children}</div>;
}
