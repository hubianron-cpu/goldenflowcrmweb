import type {CSSProperties} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion/no-react';
import {AnimatedHeadline} from '../components/AnimatedHeadline';
import {CTAButton} from '../components/CTAButton';
import {FeatureCard} from '../components/FeatureCard';
import {GoldGradientBackground} from '../components/GoldGradientBackground';
import {GoldenFlowLogoText} from '../components/GoldenFlowLogoText';
import {LEAD_FOLLOWUP_COPY} from '../videoCopy';

const GOLD = '#d4af37';

export const LeadFollowupVideo = () => {
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
  return (
    <section style={styles.centerScene}>
      <AnimatedHeadline text={LEAD_FOLLOWUP_COPY.scene1.headline} startFrame={0} endFrame={90} size={86} />
    </section>
  );
};

const SceneTwo = () => {
  return (
    <section style={styles.centerScene}>
      <AnimatedHeadline
        text={LEAD_FOLLOWUP_COPY.scene2.headline}
        startFrame={90}
        endFrame={180}
        size={78}
        slide
      />
    </section>
  );
};

const SceneThree = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - 180;
  const motion = easeOutCubic(Math.min(Math.max(local / (fps * 0.6), 0), 1));
  const opacity = interpolate(frame, [180, 196, 286, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.sceneColumn, opacity, transform: `translateY(${(1 - motion) * 50}px)`}}>
      <AnimatedHeadline
        text={LEAD_FOLLOWUP_COPY.scene3.headline}
        support={LEAD_FOLLOWUP_COPY.scene3.support}
        startFrame={180}
        endFrame={300}
        size={70}
      />
      <div style={styles.dashboardCard}>
        <div style={styles.dashboardTop}>
          <div style={styles.statusDot} />
          <span style={styles.dashboardLabel}>פעולה מומלצת להיום</span>
        </div>
        <FeatureCard
          title={LEAD_FOLLOWUP_COPY.scene3.metricLabel}
          value={LEAD_FOLLOWUP_COPY.scene3.metric}
          subtitle="לידים חמים שלא קיבלו פולואפ בזמן"
          icon="₪"
          style={styles.heroMetricCard}
        />
      </div>
    </section>
  );
};

const SceneFour = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = interpolate(frame, [300, 316, 378, 390], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.sceneColumn, opacity: sceneOpacity}}>
      <AnimatedHeadline
        text={LEAD_FOLLOWUP_COPY.scene4.headline}
        startFrame={300}
        endFrame={390}
        size={54}
      />
      <div style={styles.cardsGrid}>
        {LEAD_FOLLOWUP_COPY.scene4.cards.map((title, index) => {
          const start = 312 + index * 12;
          const progress = interpolate(frame, [start, start + 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <FeatureCard
              key={title}
              title={title}
              subtitle={index === 0 ? 'מה צריך טיפול עכשיו' : index === 1 ? 'סדר יומי ברור' : 'כל עסקה במקום שלה'}
              icon={index + 1}
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 44}px)`,
              }}
            />
          );
        })}
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
      <h2 style={styles.endHeadline}>{LEAD_FOLLOWUP_COPY.scene5.headline}</h2>
      <CTAButton>{LEAD_FOLLOWUP_COPY.scene5.cta}</CTAButton>
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
    inset: '310px 76px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    direction: 'rtl',
  },
  sceneColumn: {
    position: 'absolute',
    inset: '260px 76px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    direction: 'rtl',
  },
  dashboardCard: {
    width: '100%',
    marginTop: 70,
    border: '1px solid rgba(212,175,55,0.26)',
    borderRadius: 42,
    padding: 32,
    background:
      'linear-gradient(180deg, rgba(17,17,17,0.92) 0%, rgba(10,10,10,0.86) 100%)',
    boxShadow: '0 42px 130px rgba(0,0,0,0.5), 0 0 82px rgba(212,175,55,0.1)',
  },
  dashboardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    marginBottom: 28,
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 999,
    background: GOLD,
    boxShadow: '0 0 26px rgba(212,175,55,0.8)',
  },
  dashboardLabel: {
    color: '#e6c766',
    fontSize: 27,
    fontWeight: 900,
  },
  heroMetricCard: {
    textAlign: 'right',
  },
  cardsGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 26,
    marginTop: 70,
  },
  endScene: {
    position: 'absolute',
    inset: '260px 76px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 46,
    textAlign: 'center',
    direction: 'rtl',
  },
  endHeadline: {
    margin: '34px 0 0',
    color: '#ffffff',
    fontSize: 62,
    lineHeight: 1.1,
    fontWeight: 950,
  },
};
