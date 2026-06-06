import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Only initialize on devices with hover and fine pointer (exclude touch)
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isTouchDevice = window.matchMedia("(hover: none) or (pointer: coarse)").matches;

    if (!supportsHover || isTouchDevice) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) {
      return;
    }

    const updatePosition = (clientX: number, clientY: number) => {
      positionRef.current = { x: clientX, y: clientY };
      const scale = activeRef.current ? 1.25 : 1;
      outer.style.transform = `translate3d(${clientX - 18}px, ${clientY - 18}px, 0) scale(${scale})`;
      inner.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0) scale(${scale})`;
    };

    const handleMove = (event: PointerEvent) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleDown = () => {
      activeRef.current = true;
      updatePosition(positionRef.current.x, positionRef.current.y);
      outer.classList.add("cursor-active");
      inner.classList.add("cursor-active");
    };

    const handleUp = () => {
      activeRef.current = false;
      updatePosition(positionRef.current.x, positionRef.current.y);
      outer.classList.remove("cursor-active");
      inner.classList.remove("cursor-active");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [isSupported]);

  return isSupported ? (
    <>
      <div ref={outerRef} className="custom-cursor-outer" />
      <div ref={innerRef} className="custom-cursor-inner" />
    </>
  ) : null;
}
