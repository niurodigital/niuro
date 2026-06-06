import { useEffect, useRef, useState } from "react";

export function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let intervalId: number | undefined;
    let cancelled = false;

    const initVanta = () => {
      if (cancelled || vantaEffect || !myRef.current) return;
      if (window.VANTA?.NET) {
        setVantaEffect(
          window.VANTA.NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3feaff,
            backgroundColor: 0x050505,
            points: 15.0,
            maxDistance: 25.0,
            spacing: 20.0,
          }),
        );
      }
    };

    initVanta();

    if (!window.VANTA?.NET) {
      intervalId = window.setInterval(() => {
        if (window.VANTA?.NET) {
          initVanta();
          if (intervalId) {
            window.clearInterval(intervalId);
            intervalId = undefined;
          }
        }
      }, 250);
    }

    return () => {
      cancelled = true;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
