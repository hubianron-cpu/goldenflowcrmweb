import type {CSSProperties} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion/no-react';
import {AnimatedHeadline} from '../components/AnimatedHeadline';
import {CTAButton} from '../components/CTAButton';
import {FeatureCard} from '../components/FeatureCard';
import {GoldenFlowLogoText} from '../components/GoldenFlowLogoText';
import {GoldGradientBackground} from '../components/GoldGradientBackground';
import {DAILY_CLOSING_COPY, type DailyClosingActionCopy} from '../videoCopy';

const GOLD = '#d4af37';

export const DailyClosingVideo = () => {
  return (
    <GoldGradientBackground>
      <AbsoluteFill style={styles.frame}>
        <GoldenFlowLogoText compact />

        <SceneOne />
        <SceneTwo />
        <SceneThree />
        <SceneFour />
        <SceneFive />
      </AbsoluteFill>
    </GoldGradientBackground>
  );
};

const SceneOne = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, 78, 90], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.centerScene, ...styles.openingScene, opacity}}>
      <div style={styles.questionMark}>?</div>
      <AnimatedHeadline text={DAILY_CLOSING_COPY.scene1.headline} startFrame={0} endFrame={90} size={82} />
    </section>
  );
};

const SceneTwo = () => {
  return (
    <section style={styles.centerScene}>
      <AnimatedHeadline text={DAILY_CLOSING_COPY.scene2.headline} startFrame={90} endFrame={180} size={82} slide />
    </section>
  );
};

const SceneThree = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - 180;
  const motion = easeOutCubic(Math.min(Math.max(local / (fps * 0.55), 0), 1));
  const opacity = interpolate(frame, [180, 196, 286, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.sceneColumn, opacity, transform: `translateY(${(1 - motion) * 44}px)`}}>
      <AnimatedHeadline
        text={DAILY_CLOSING_COPY.scene3.headline}
        support={DAILY_CLOSING_COPY.scene3.support}
        startFrame={180}
        endFrame={300}
        size={70}
      />
      <DailyActionBoard />
    </section>
  );
};

const DailyActionBoard = () => {
  const frame = useCurrentFrame();

  return (
    <div style={styles.dailyBoard}>
      <div style={styles.boardTop}>
        <div style={styles.boardPulse} />
        <div>
          <p style={styles.boardEyebrow}>Daily Closing</p>
          <p style={styles.boardTitle}>תוכנית פעולה להיום</p>
        </div>
      </div>

      <div style={styles.boardCards}>
        {DAILY_CLOSING_COPY.scene3.actions.map((action, index) => {
          const start = 205 + index * 12;
          const progress = interpolate(frame, [start, start + 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <ActionCard
              key={action.title}
              action={action}
              index={index}
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 34}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const ActionCard = ({
  action,
  index,
  style,
}: {
  action: DailyClosingActionCopy;
  index: number;
  style?: CSSProperties;
}) => {
  return (
    <FeatureCard
      title={action.title}
      subtitle={action.subtitle}
      icon={index + 1}
      style={{
        ...styles.actionCard,
        ...(index === 0 ? styles.primaryActionCard : null),
        ...style,
      }}
    />
  );
};

const SceneFour = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - 300;
  const motion = easeOutCubic(Math.min(Math.max(local / (fps * 0.5), 0), 1));
  const opacity = interpolate(frame, [300, 316, 378, 390], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.centerScene, opacity}}>
      <div style={{...styles.actionMoment, transform: `scale(${0.94 + motion * 0.06})`}}>
        <div style={styles.actionMomentGlow} />
        <AnimatedHeadline text={DAILY_CLOSING_COPY.scene4.headline} startFrame={300} endFrame={390} size={72} />
      </div>
    </section>
  );
};

const SceneFive = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - 390;
  const motion = easeOutCubic(Math.min(Math.max(local / (fps * 0.55), 0), 1));
  const opacity = interpolate(frame, [390, 405], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.endScene, opacity, transform: `scale(${0.96 + motion * 0.04})`}}>
      <GoldenFlowLogoText />
      <h2 style={styles.endHeadline}>{DAILY_CLOSING_COPY.scene5.headline}</h2>
      <CTAButton>{DAILY_CLOSING_COPY.scene5.cta}</CTAButton>
      <p style={styles.endSupport}>{DAILY_CLOSING_COPY.scene5.support}</p>
    </section>
  );
};

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

const styles: Record<string, CSSProperties> = {
  frame: {
    padding: '92px 76px',
    alignItems: 'center',
  },
  centerScene: {
    position: 'absolute',
    inset: '300px 76px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    direction: 'rtl',
  },
  openingScene: {
    flexDirection: 'column',
    gap: 42,
  },
  questionMark: {
    width: 116,
    height: 116,
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: GOLD,
    border: '1px solid rgba(212,175,55,0.34)',
    background: 'rgba(212,175,55,0.08)',
    boxShadow: '0 0 70px rgba(212,175,55,0.16)',
    fontSize: 62,
    fontWeight: 950,
  },
  sceneColumn: {
    position: 'absolute',
    inset: '240px 76px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    direction: 'rtl',
  },
  dailyBoard: {
    width: '100%',
    marginTop: 48,
    border: '1px solid rgba(212,175,55,0.28)',
    borderRadius: 42,
    padding: '34px 34px 36px',
    background: 'linear-gradient(180deg, rgba(17,17,17,0.94) 0%, rgba(7,7,7,0.9) 100%)',
    boxShadow: '0 42px 130px rgba(0,0,0,0.52), 0 0 74px rgba(212,175,55,0.09)',
  },
  boardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 18,
    marginBottom: 28,
    textAlign: 'right',
  },
  boardPulse: {
    width: 58,
    height: 58,
    borderRadius: 18,
    background: 'linear-gradient(135deg, #f3da75 0%, #d4af37 100%)',
    boxShadow: '0 18px 46px rgba(212,175,55,0.18)',
    flexShrink: 0,
  },
  boardEyebrow: {
    margin: 0,
    color: '#e6c766',
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  boardTitle: {
    margin: '8px 0 0',
    color: '#ffffff',
    fontSize: 38,
    lineHeight: 1.12,
    fontWeight: 950,
  },
  boardCards: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 18,
  },
  actionCard: {
    padding: '28px 30px',
    textAlign: 'right',
  },
  primaryActionCard: {
    border: '1px solid rgba(212,175,55,0.42)',
    background: 'linear-gradient(90deg, rgba(212,175,55,0.13) 0%, rgba(255,255,255,0.045) 100%)',
  },
  actionMoment: {
    position: 'relative',
    width: '100%',
    minHeight: 520,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(212,175,55,0.2)',
    borderRadius: 46,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
    overflow: 'hidden',
  },
  actionMomentGlow: {
    position: 'absolute',
    inset: 'auto 160px 70px',
    height: 160,
    borderRadius: 999,
    background: 'radial-gradient(circle, rgba(212,175,55,0.22) 0%, transparent 70%)',
    filter: 'blur(24px)',
  },
  endScene: {
    position: 'absolute',
    inset: '250px 76px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 34,
    textAlign: 'center',
    direction: 'rtl',
  },
  endHeadline: {
    margin: '26px 0 0',
    color: '#ffffff',
    fontSize: 58,
    lineHeight: 1.1,
    fontWeight: 950,
  },
  endSupport: {
    margin: 0,
    maxWidth: 740,
    color: '#d6d6d6',
    fontSize: 30,
    lineHeight: 1.35,
    fontWeight: 750,
  },
};
