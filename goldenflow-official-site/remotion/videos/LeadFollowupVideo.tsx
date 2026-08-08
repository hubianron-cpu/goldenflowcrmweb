import type {CSSProperties} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {interpolate} from 'remotion/no-react';
import {AnimatedHeadline} from '../components/AnimatedHeadline';
import {CTAButton} from '../components/CTAButton';
import {FeatureCard} from '../components/FeatureCard';
import {GoldGradientBackground} from '../components/GoldGradientBackground';
import {GoldenFlowLogoText} from '../components/GoldenFlowLogoText';
import {
  LEAD_FOLLOWUP_AD_COPY,
  LEAD_FOLLOWUP_HERO_COPY,
  type LeadFollowupCopy,
  type LeadRowCopy,
} from '../videoCopy';

const GOLD = '#d4af37';

type LeadFollowupVideoLayoutProps = {
  copy: LeadFollowupCopy;
  mode?: 'ad' | 'hero';
};

export const LeadFollowupVideo = () => {
  return <LeadFollowupVideoLayout copy={LEAD_FOLLOWUP_AD_COPY} mode="ad" />;
};

export const LeadFollowupAdVideo = () => {
  return <LeadFollowupVideoLayout copy={LEAD_FOLLOWUP_AD_COPY} mode="ad" />;
};

export const LeadFollowupHeroVideo = () => {
  return <LeadFollowupVideoLayout copy={LEAD_FOLLOWUP_HERO_COPY} mode="hero" />;
};

const LeadFollowupVideoLayout = ({copy, mode = 'ad'}: LeadFollowupVideoLayoutProps) => {
  return (
    <GoldGradientBackground>
      <AbsoluteFill style={styles.frame}>
        <GoldenFlowLogoText compact />

        <SceneOne copy={copy} mode={mode} />
        <SceneTwo copy={copy} />
        <SceneThree copy={copy} mode={mode} />
        <SceneFour copy={copy} />
        <SceneFive copy={copy} />
      </AbsoluteFill>
    </GoldGradientBackground>
  );
};

const SceneOne = ({copy, mode}: {copy: LeadFollowupCopy; mode: 'ad' | 'hero'}) => {
  return (
    <section style={{...styles.centerScene, ...styles.openingScene}}>
      <div style={mode === 'ad' ? styles.openingBurst : styles.openingAccent} />
      <AnimatedHeadline text={copy.scene1.headline} startFrame={0} endFrame={90} size={mode === 'ad' ? 100 : 96} />
    </section>
  );
};

const SceneTwo = ({copy}: {copy: LeadFollowupCopy}) => {
  return (
    <section style={styles.centerScene}>
      <AnimatedHeadline text={copy.scene2.headline} startFrame={90} endFrame={180} size={78} slide />
    </section>
  );
};

const SceneThree = ({copy, mode}: {copy: LeadFollowupCopy; mode: 'ad' | 'hero'}) => {
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
      <AnimatedHeadline text={copy.scene3.headline} support={copy.scene3.support} startFrame={180} endFrame={300} size={mode === 'ad' ? 74 : 68} />
      <LeadAttentionCard copy={copy} />
    </section>
  );
};

const LeadAttentionCard = ({copy}: {copy: LeadFollowupCopy}) => {
  const frame = useCurrentFrame();

  return (
    <div style={styles.leadPreviewCard}>
      <div style={styles.leadPreviewHeader}>
        <span style={styles.previewEyebrow}>{copy.scene3.previewEyebrow}</span>
        <span style={styles.previewCount}>{copy.scene3.leadRows.length}</span>
      </div>
      <h3 style={styles.previewTitle}>{copy.scene3.previewTitle}</h3>
      <div style={styles.leadRows}>
        {copy.scene3.leadRows.map((lead, index) => {
          const start = 200 + index * 10;
          const progress = interpolate(frame, [start, start + 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <LeadRow
              key={`${lead.name}-${lead.status}`}
              lead={lead}
              style={{
                opacity: progress,
                transform: `translateX(${(1 - progress) * -28}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const LeadRow = ({lead, style}: {lead: LeadRowCopy; style?: CSSProperties}) => {
  return (
    <div style={{...styles.leadRow, ...(lead.urgent ? styles.leadRowUrgent : null), ...style}}>
      <div style={styles.leadIdentity}>
        <span style={styles.leadAvatar}>{lead.name.slice(0, 1)}</span>
        <div>
          <p style={styles.leadName}>{lead.name}</p>
          <p style={styles.leadAction}>{lead.action}</p>
        </div>
      </div>
      <span style={lead.urgent ? styles.leadStatusHot : styles.leadStatus}>{lead.status}</span>
    </div>
  );
};

const SceneFour = ({copy}: {copy: LeadFollowupCopy}) => {
  const frame = useCurrentFrame();
  const sceneOpacity = interpolate(frame, [300, 316, 378, 390], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <section style={{...styles.sceneColumn, opacity: sceneOpacity}}>
      <AnimatedHeadline text={copy.scene4.headline} startFrame={300} endFrame={390} size={54} />
      <div style={styles.cardsGrid}>
        {copy.scene4.cards.map((title, index) => {
          const start = 312 + index * 12;
          const progress = interpolate(frame, [start, start + 18], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <FeatureCard
              key={title}
              title={title}
              subtitle={copy.scene4.subtitles[index]}
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

const SceneFive = ({copy}: {copy: LeadFollowupCopy}) => {
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
      <h2 style={styles.endHeadline}>{copy.scene5.headline}</h2>
      <CTAButton>{copy.scene5.cta}</CTAButton>
      <CTAFooterLine text={copy.scene5.support} />
    </section>
  );
};

const CTAFooterLine = ({text}: {text?: string}) => {
  if (!text) {
    return null;
  }

  return <p style={styles.endSupport}>{text}</p>;
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
  openingScene: {
    flexDirection: 'column',
    gap: 44,
  },
  openingAccent: {
    width: 150,
    height: 6,
    borderRadius: 999,
    background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.96) 50%, transparent 100%)',
    boxShadow: '0 0 34px rgba(212,175,55,0.28)',
  },
  openingBurst: {
    width: 120,
    height: 120,
    borderRadius: 999,
    background: 'radial-gradient(circle, rgba(212,175,55,0.52) 0%, rgba(212,175,55,0.14) 42%, transparent 72%)',
    boxShadow: '0 0 72px rgba(212,175,55,0.28)',
  },
  sceneColumn: {
    position: 'absolute',
    inset: '250px 76px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    direction: 'rtl',
  },
  leadPreviewCard: {
    width: '100%',
    marginTop: 50,
    border: '1px solid rgba(212,175,55,0.28)',
    borderRadius: 42,
    padding: '34px 34px 38px',
    background: 'linear-gradient(180deg, rgba(17,17,17,0.94) 0%, rgba(8,8,8,0.9) 100%)',
    boxShadow: '0 42px 130px rgba(0,0,0,0.52), 0 0 70px rgba(212,175,55,0.09)',
  },
  leadPreviewHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    marginBottom: 22,
  },
  previewEyebrow: {
    color: '#e6c766',
    fontSize: 25,
    fontWeight: 900,
    letterSpacing: 0,
  },
  previewCount: {
    width: 58,
    height: 58,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#050505',
    background: 'linear-gradient(135deg, #f3da75 0%, #d4af37 100%)',
    fontSize: 31,
    fontWeight: 950,
    boxShadow: '0 18px 46px rgba(212,175,55,0.18)',
  },
  previewTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 1.12,
    fontWeight: 950,
    textAlign: 'right',
  },
  leadRows: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 18,
    marginTop: 26,
  },
  leadRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 28,
    padding: '22px 24px',
    background: 'rgba(255,255,255,0.045)',
  },
  leadRowUrgent: {
    border: '1px solid rgba(212,175,55,0.34)',
    background: 'linear-gradient(90deg, rgba(212,175,55,0.12) 0%, rgba(255,255,255,0.045) 100%)',
  },
  leadIdentity: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    minWidth: 0,
  },
  leadAvatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f4df88',
    background: 'rgba(212,175,55,0.14)',
    border: '1px solid rgba(212,175,55,0.24)',
    fontSize: 28,
    fontWeight: 950,
    flexShrink: 0,
  },
  leadName: {
    margin: 0,
    color: '#ffffff',
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 920,
    textAlign: 'right',
  },
  leadAction: {
    margin: '10px 0 0',
    color: '#bdbdbd',
    fontSize: 24,
    lineHeight: 1.25,
    fontWeight: 700,
    textAlign: 'right',
  },
  leadStatus: {
    border: '1px solid rgba(212,175,55,0.24)',
    borderRadius: 999,
    padding: '11px 16px',
    color: '#e6c766',
    background: 'rgba(212,175,55,0.08)',
    fontSize: 22,
    fontWeight: 850,
    whiteSpace: 'nowrap',
  },
  leadStatusHot: {
    border: '1px solid rgba(212,175,55,0.38)',
    borderRadius: 999,
    padding: '11px 16px',
    color: '#050505',
    background: 'linear-gradient(135deg, #f3da75 0%, #d4af37 100%)',
    fontSize: 22,
    fontWeight: 900,
    whiteSpace: 'nowrap',
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
