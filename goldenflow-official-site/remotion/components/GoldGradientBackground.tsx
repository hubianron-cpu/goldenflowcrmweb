import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion/no-react';

type GoldGradientBackgroundProps = {
  children: ReactNode;
};

export const GoldGradientBackground = ({children}: GoldGradientBackgroundProps) => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 450], [0, 1]);

  return (
    <AbsoluteFill style={styles.background}>
      <div
        style={{
          ...styles.goldGlow,
          transform: `translateY(${glow * 80}px) scale(${1 + glow * 0.08})`,
        }}
      />
      <div style={styles.grid} />
      <div style={styles.vignette} />
      {children}
    </AbsoluteFill>
  );
};

const styles: Record<string, CSSProperties> = {
  background: {
    background:
      'radial-gradient(circle at 18% 12%, rgba(212,175,55,0.18), transparent 420px), linear-gradient(180deg, #050505 0%, #090909 52%, #030303 100%)',
    color: 'white',
    direction: 'rtl',
    fontFamily: 'Arial, "Segoe UI", sans-serif',
    overflow: 'hidden',
  },
  goldGlow: {
    position: 'absolute',
    left: -220,
    right: -220,
    bottom: 260,
    height: 420,
    borderRadius: '50%',
    background:
      'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 20%, rgba(232,199,102,0.26) 52%, rgba(184,148,46,0.1) 78%, transparent 100%)',
    filter: 'blur(26px)',
    opacity: 0.9,
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
    backgroundSize: '90px 90px',
    opacity: 0.22,
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.72) 100%)',
  },
};
