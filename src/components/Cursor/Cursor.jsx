import { useEffect, useRef, useState } from 'react';
import './cursor.css';

export default function Cursor() {
  const [ripples, setRipples] = useState([]);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const animate = () => {
      // Smoothly move the ring towards the dot position
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.15);
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.15);

      // Liquid stretching calculations based on movement velocity
      const dx = posRef.current.x - ringPosRef.current.x;
      const dy = posRef.current.y - ringPosRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Angle of stretching (pointing in movement direction)
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Cap the stretch factor at 55% to look premium and not distorted
      const stretch = Math.min(speed * 0.015, 0.55);

      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch;

      // Apply hardware accelerated translate, rotation, and liquid stretch
      ring.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      cursor.classList.add('cursor--hover');
      ring.classList.add('ring--hover');
    };
    const onLeaveInteractive = () => {
      cursor.classList.remove('cursor--hover');
      ring.classList.remove('ring--hover');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    // Attach custom hover listeners dynamically to standard components and custom sections
    const setupInteractives = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor-hover], .purifier-column__layer, .tech-stage-btn, .catalog-card, .why-us__card, .testimonial-card');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    setupInteractives();
    // Periodically re-scan DOM for dynamic items
    const interval = setInterval(setupInteractives, 2000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      clearInterval(interval);
    };
  }, []);

  // Click-triggered double water ripple effect
  useEffect(() => {
    const onClick = (e) => {
      const id = Date.now() + Math.random();
      const newRipple = {
        id,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);

      // Automatically prune ripple elements after animation ends (800ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 800);
    };

    window.addEventListener('click', onClick, { passive: true });
    return () => window.removeEventListener('click', onClick);
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="water-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
