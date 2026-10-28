export default function Hero3D() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      <div className="grid-floor" />

      <div className="scene-3d absolute right-[6%] top-[14%]">
        <div className="cube">
          <span className="cube-face cube-front" />
          <span className="cube-face cube-back" />
          <span className="cube-face cube-right" />
          <span className="cube-face cube-left" />
          <span className="cube-face cube-top" />
          <span className="cube-face cube-bottom" />
        </div>
      </div>

      <div className="scene-3d scene-delay absolute bottom-[16%] left-[4%]">
        <div className="cube cube-sm cube-reverse">
          <span className="cube-face cube-front" />
          <span className="cube-face cube-back" />
          <span className="cube-face cube-right" />
          <span className="cube-face cube-left" />
          <span className="cube-face cube-top" />
          <span className="cube-face cube-bottom" />
        </div>
      </div>
    </div>
  );
}