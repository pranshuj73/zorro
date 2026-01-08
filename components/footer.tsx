export function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-mono text-neutral-600">
          ZORRO © 2026
        </div>

        <div className="flex gap-6">
          {/* Minimal links if needed, keeping it empty for now as per design doc "No cluttered footer" */}
        </div>
      </div>
    </footer>
  );
}
