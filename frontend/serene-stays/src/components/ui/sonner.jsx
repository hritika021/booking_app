export function Toaster() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Sonner toasts will be rendered here */}
    </div>
  );
}

export function toast({ title, description, variant }) {
  console.log("Toast:", { title, description, variant });
}
