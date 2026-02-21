'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const DIRECTIONS = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 0, y: 0 },
];

interface Props {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  bound?: number;
  intervalMs?: number;
}

export default function NoisyIcon({ src, alt, size = 24, className, bound = 3, intervalMs = 500 }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      setPos(prev => ({
        x: Math.max(-bound, Math.min(bound, prev.x + dir.x)),
        y: Math.max(-bound, Math.min(bound, prev.y + dir.y)),
      }));
    }, intervalMs);
    return () => clearInterval(id);
  }, [bound, intervalMs]);

  return (
    <div style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}>
      <Image src={src} alt={alt} width={size} height={size} className={className} />
    </div>
  );
}
