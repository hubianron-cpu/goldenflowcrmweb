import type {CSSProperties} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion/no-react';

type AnimatedHeadlineProps = {
  text: string;
  startFrame: number;
  endFrame: number;
  size?: number;
  support?: string;
  slide?: boolean;
};

export const AnimatedHeadline = ({
  text,
  startFrame,
  endFrame,
  size = 92,
  support,
  slide = false,
}: AnimatedHeadlineProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = frame - startFrame;
  const entrance = easeOutCubic(Math.min(Math.max(localFrame / (fps * 0.55), 0), 1));
  const opacity = interpolate(frame, [startFrame, startFrame + 14, endFrame - 12, endFrame], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = slide ? interpolate(entrance, [0, 1], [54, 0]) : 0;
  const scale = slide ? 1 : interpolate(entrance, [0, 1], [0.96, 1]);

  return (
    <div style={{...styles.wrap, opacity, transform: `translateY(${y}px) scale(${scale})`}}>
      <h1 style={{...styles.headline, fontSize: size}}>{text}</h1>
      {support ? <p style={styles.support}>{support}</p> : null}
    </div>
  );
};

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

const styles: Record<string, CSSProperties> = {
  wrap: {
    width: '100%',
    textAlign: 'center',
    direction: 'rtl',
  },
  headline: {
    margin: 0,
    color: '#ffffff',
    fontWeight: 950,
    lineHeight: 1.08,
    letterSpacing: 0,
    textShadow: '0 24px 70px rgba(0,0,0,0.55)',
  },
  support: {
    margin: '34px auto 0',
    maxWidth: 760,
    color: '#d6d6d6',
    fontSize: 38,
    fontWeight: 700,
    lineHeight: 1.35,
  },
};
