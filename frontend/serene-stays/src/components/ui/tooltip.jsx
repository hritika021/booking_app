import { useState } from "react";

export function TooltipProvider({ children }) {
  return <div>{children}</div>;
}

export function Tooltip({ children, content, className }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md">
          {content}
        </div>
      )}
    </div>
  );
}

export function TooltipContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function TooltipTrigger({ children, className }) {
  return <div className={className}>{children}</div>;
}
