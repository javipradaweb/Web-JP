export default function GlobalGlows() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Halo morado 1 */}
      <div className="glow-float absolute -top-60 -left-60 h-[820px] w-[820px] rounded-full bg-[#a12995]/25 blur-3xl" />

      {/* Halo morado 2 */}
      <div className="glow-float slow absolute top-0 right-[-380px] h-[980px] w-[980px] rounded-full bg-[#a12995]/18 blur-3xl" />

      {/* Halo celeste */}
      <div className="glow-float fast absolute bottom-[-460px] left-1/3 h-[900px] w-[900px] rounded-full bg-[#00e1f6]/16 blur-3xl" />
    </div>
  );
}
