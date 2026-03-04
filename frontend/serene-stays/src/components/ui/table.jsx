export function Table({ children, className = "" }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full text-sm ${className}`}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }) {
  return <thead className="border-b">{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr className="border-b hover:bg-gray-50">{children}</tr>;
}

export function TableHead({ children }) {
  return <th className="text-left px-4 py-3 font-semibold">{children}</th>;
}

export function TableCell({ children }) {
  return <td className="px-4 py-3">{children}</td>;
}

export function TableCaption({ children }) {
  return <caption className="text-sm text-gray-500 mt-2">{children}</caption>;
}