import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GridBackgroundProps {
  gridSizeDesktop?: number;
  gridSizeMobile?: number;
  gridBorderSize?: number;
  gridBorderColor?: string;
  gridBackground?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  gridSizeDesktop = 32,
  gridSizeMobile = 12,
  gridBorderSize = 1,
  gridBorderColor = "rgba(255, 255, 255, 0.05)",
  gridBackground = "transparent"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols: number, rows: number, squareSize: number;
    let blocks: { x: number, y: number, color: string, alpha: number }[] = [];
    let trailQueue: typeof blocks = [];
    let lastHovered: number | null = null;
    let colorPointer = 0;

    const opacities = [0.15, 0.12, 0.10, 0.07, 0.05, 0.03];
    // vibrant momoney green: #39FF14 (rgb: 57, 255, 20)
    const gridColors = opacities.map(a => `rgba(57, 255, 20, ${a})`);

    const setupGrid = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      cols = window.innerWidth < 768 ? gridSizeMobile : gridSizeDesktop;
      squareSize = canvas.width / cols;
      rows = Math.ceil(canvas.height / squareSize);
      blocks = [];
      trailQueue.length = 0;
      lastHovered = null;
      colorPointer = 0;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          blocks.push({ x: x * squareSize, y: y * squareSize, color: "#fff", alpha: 0 });
        }
      }
    };

    let animationFrameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blocks.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.globalAlpha = b.alpha;
        ctx.fillRect(b.x, b.y, squareSize, squareSize);
        ctx.globalAlpha = 1;
        if (gridBorderSize > 0) {
          ctx.lineWidth = gridBorderSize;
          ctx.strokeStyle = gridBorderColor;
          ctx.strokeRect(b.x, b.y, squareSize, squareSize);
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const fadeOut = (b: typeof blocks[0]) => {
      gsap.to(b, { alpha: 0, duration: 2, delay: 0.5 });
    };

    const onPointerMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX;
      const my = e.clientY;
      if (mx < r.left || mx > r.right || my < r.top || my > r.bottom) return;

      const xIdx = Math.floor((mx - r.left) / squareSize);
      const yIdx = Math.floor((my - r.top) / squareSize);
      const idx = yIdx * cols + xIdx;

      if (idx !== lastHovered && idx >= 0 && idx < blocks.length) {
        const b = blocks[idx];
        b.color = gridColors[colorPointer];
        colorPointer = (colorPointer + 1) % gridColors.length;
        gsap.to(b, { alpha: 1, duration: 0.1, overwrite: true });
        fadeOut(b);
        trailQueue.push(b);
        if (trailQueue.length > gridColors.length) {
          const old = trailQueue.shift();
          if (old) {
            gsap.killTweensOf(old);
            old.alpha = 0;
          }
        }
        lastHovered = idx;
      }
    };

    setupGrid();
    draw();

    window.addEventListener('resize', setupGrid);
    document.addEventListener('mousemove', onPointerMove);

    return () => {
      window.removeEventListener('resize', setupGrid);
      document.removeEventListener('mousemove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSizeDesktop, gridSizeMobile, gridBorderSize, gridBorderColor]);

  return (
    <div style={{ backgroundColor: gridBackground }} className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
};
