export function ResizablePanelGroup({ children, className }) {
  return <div className={`flex h-full ${className || ''}`}>{children}</div>;
}

export function ResizablePanel({ children, className, defaultSize }) {
  return <div className={`flex ${className || ''}`} style={{ flex: defaultSize }}>{children}</div>;
}

export function ResizableHandle({ className, withHandle }) {
  return <div className={`relative flex w-1 items-center justify-center bg-border ${className || ''}`}>{withHandle && <div className="h-4 w-1 rounded-full bg-border" />}</div>;
}
