import React, { useEffect, useRef } from "react";
import './cursor.css';

export const Cursor = (): React.JSX.Element => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Synchronization of pointer position using native screen coordinates
    const moveCursor = (e: MouseEvent): void => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Fluid magnetic animation based on offset calculation
    const handleMagneticMove = function (this: HTMLDivElement, e: MouseEvent): void {
      const targetAnim = this.querySelector<HTMLDivElement>(".hover-anim");
      if (!targetAnim) return;

      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const factor = 25;
      
      const xMove = (x / width) * (factor * 2) - factor;
      const yMove = (y / height) * (factor * 2) - factor;

      targetAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
    };

    const handleMagneticLeave = function (this: HTMLDivElement): void {
      const targetAnim = this.querySelector<HTMLDivElement>(".hover-anim");
      if (targetAnim) targetAnim.style.transform = "";
    };

    // Delegation of active states (Avoids individual listeners per link)
    const handleGlobalMouseOver = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .cursor-pointer')) {
        cursor.classList.add("cursor-active");
      } else {
        cursor.classList.remove("cursor-active");
      }
    };

    // Optimized injection of stable listeners
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleGlobalMouseOver, { passive: true });

    const magneticNodes = document.querySelectorAll<HTMLDivElement>(".hover-this");
    magneticNodes.forEach((node) => {
      node.addEventListener("mousemove", handleMagneticMove, { passive: true });
      node.addEventListener("mouseleave", handleMagneticLeave, { passive: true });
    });

    // Clean-up absolutely free of memory leaks
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleGlobalMouseOver);
      magneticNodes.forEach((node) => {
        node.removeEventListener("mousemove", handleMagneticMove);
        node.removeEventListener("mouseleave", handleMagneticLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
};

export default Cursor;