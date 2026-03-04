import React from "react";

export function Form({ children, ...props }) {
  return (
    <form {...props}>
      {children}
    </form>
  );
}

export function FormField({ label, name, children }) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export function FormDescription({ children }) {
  return (
    <p className="text-sm text-gray-500">
      {children}
    </p>
  );
}

export function FormMessage({ children }) {
  return (
    <p className="text-sm text-red-500">
      {children}
    </p>
  );
}