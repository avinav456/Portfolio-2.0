/* Animated skull with layered CSS fire */
const flames = [
  /* id, width, height, bottomOffset, gradient, animation, duration, delay, blur */
  {
    id: 1, w: 240, h: 280,
    bottom: 10,
    grad: "linear-gradient(to top, #880000 0%, #cc2200 20%, #ff5500 50%, #ff9900 75%, transparent 100%)",
    anim: "flame-a", dur: "0.48s", delay: "0s", blur: 6,
  },
  {
    id: 2, w: 190, h: 250,
    bottom: 18,
    grad: "linear-gradient(to top, #aa1100 0%, #dd3300 20%, #ff6600 50%, #ffaa00 78%, transparent 100%)",
    anim: "flame-b", dur: "0.41s", delay: "0.06s", blur: 4,
  },
  {
    id: 3, w: 145, h: 215,
    bottom: 30,
    grad: "linear-gradient(to top, #cc2200 0%, #ff4400 25%, #ff7700 55%, #ffcc00 80%, transparent 100%)",
    anim: "flame-c", dur: "0.44s", delay: "0.11s", blur: 2.5,
  },
  {
    id: 4, w: 100, h: 170,
    bottom: 45,
    grad: "linear-gradient(to top, #ff3300 0%, #ff6600 30%, #ffaa00 60%, #ffe066 85%, transparent 100%)",
    anim: "flame-a", dur: "0.37s", delay: "0.04s", blur: 1.5,
  },
  {
    id: 5, w: 60, h: 120,
    bottom: 65,
    grad: "linear-gradient(to top, #ff5500 0%, #ff9900 35%, #ffdd00 65%, #fff8cc 88%, transparent 100%)",
    anim: "flame-b", dur: "0.32s", delay: "0.08s", blur: 0.5,
  },
  {
    id: 6, w: 28, h: 75,
    bottom: 90,
    grad: "linear-gradient(to top, #ffaa00 0%, #ffee00 45%, #ffffff 80%, transparent 100%)",
    anim: "flame-c", dur: "0.28s", delay: "0.02s", blur: 0,
  },
];

const sparks = [
  { id: 1, left: "44%", bottom: 155, dur: "1.3s", delay: "0s",    size: 5, tx: "-18px" },
  { id: 2, left: "56%", bottom: 160, dur: "1.6s", delay: "0.35s", size: 4, tx: "22px"  },
  { id: 3, left: "38%", bottom: 145, dur: "1.1s", delay: "0.7s",  size: 6, tx: "-28px" },
  { id: 4, left: "62%", bottom: 158, dur: "1.45s",delay: "0.15s", size: 3, tx: "16px"  },
  { id: 5, left: "50%", bottom: 165, dur: "1.0s", delay: "0.9s",  size: 5, tx: "6px"   },
  { id: 6, left: "33%", bottom: 140, dur: "1.35s",delay: "0.5s",  size: 4, tx: "-35px" },
  { id: 7, left: "67%", bottom: 150, dur: "1.2s", delay: "0.25s", size: 3, tx: "30px"  },
];

export default function SkullFire() {
  return (
    <div
      style={{
        position: "relative",
        width: 300,
        height: 460,
        flexShrink: 0,
      }}
    >
      {/* Ambient ground glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 280,
          height: 60,
          background: "radial-gradient(ellipse at center, rgba(255,80,0,0.55) 0%, transparent 70%)",
          animation: "ground-glow 1.2s ease-in-out infinite",
          transformOrigin: "center",
          transform: "translateX(-50%)",
          filter: "blur(8px)",
        }}
      />

      {/* Flame layers */}
      {flames.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            bottom: f.bottom,
            left: "50%",
            marginLeft: -(f.w / 2),
            width: f.w,
            height: f.h,
            borderRadius: "50% 50% 35% 35% / 72% 72% 28% 28%",
            background: f.grad,
            filter: `blur(${f.blur}px)`,
            transformOrigin: "bottom center",
            animation: `${f.anim} ${f.dur} ease-in-out ${f.delay} infinite alternate`,
          }}
        />
      ))}

      {/* Skull */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "8.5rem",
          lineHeight: 1,
          animation: "skull-glow-pulse 1.8s ease-in-out infinite",
          userSelect: "none",
          zIndex: 10,
          cursor: "default",
        }}
      >
        💀
      </div>

      {/* Sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            bottom: s.bottom,
            left: s.left,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#ffdd44",
            boxShadow: `0 0 ${s.size * 2}px ${s.size}px rgba(255,150,0,0.8)`,
            animation: `spark-float ${s.dur} ease-out ${s.delay} infinite`,
            zIndex: 12,
          }}
        />
      ))}
    </div>
  );
}
