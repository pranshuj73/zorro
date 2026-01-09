export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,transparent,var(--background))]" />
    </div>
  );
}
