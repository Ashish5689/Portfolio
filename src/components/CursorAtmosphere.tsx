import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

const spring = { damping: 28, stiffness: 260, mass: 0.45 };

const CursorAtmosphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canvas = canvasRef.current;

    if (!canvas || !finePointer.matches || reducedMotion.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    setEnabled(true);
    const particles: Particle[] = [];
    let frameId = 0;
    let running = false;
    let previousX = -100;
    let previousY = -100;
    let lastMove = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = "lighter";

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.028;
        particle.size *= 0.992;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.fillStyle = `rgba(54, 112, 255, ${particle.life * 0.25})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      if (particles.length === 0 && performance.now() - lastMove > 140) {
        running = false;
        return;
      }

      frameId = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (running) return;
      running = true;
      frameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      lastMove = performance.now();

      const distance = Math.hypot(event.clientX - previousX, event.clientY - previousY);
      if (distance > 5) {
        const count = Math.min(4, Math.max(1, Math.floor(distance / 16)));
        for (let index = 0; index < count && particles.length < 30; index += 1) {
          particles.push({
            x: event.clientX + (Math.random() - 0.5) * 16,
            y: event.clientY + (Math.random() - 0.5) * 16,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            life: 0.7 + Math.random() * 0.3,
            size: 0.7 + Math.random() * 1.8,
          });
        }
      }

      previousX = event.clientX;
      previousY = event.clientY;
      start();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId);
        particles.length = 0;
        running = false;
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [x, y]);

  return (
    <div
      className={`cursor-atmosphere ${enabled ? "is-enabled" : ""}`}
      data-testid="cursor-atmosphere"
      data-enabled={enabled}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
      <motion.div className="cursor-halo" style={{ x: smoothX, y: smoothY }} />
    </div>
  );
};

export default CursorAtmosphere;
