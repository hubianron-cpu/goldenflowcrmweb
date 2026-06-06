import type {CSSProperties, ReactNode} from 'react';

type FeatureCardProps = {
  title: string;
  subtitle?: string;
  value?: string;
  icon?: ReactNode;
  style?: CSSProperties;
};

export const FeatureCard = ({title, subtitle, value, icon, style}: FeatureCardProps) => {
  return (
    <div style={{...styles.card, ...style}}>
      <div style={styles.topRow}>
        <div style={styles.icon}>{icon ?? '✓'}</div>
        <p style={styles.title}>{title}</p>
      </div>
      {value ? <p style={styles.value}>{value}</p> : null}
      {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  card: {
    border: '1px solid rgba(212,175,55,0.28)',
    borderRadius: 34,
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.028) 100%)',
    boxShadow: '0 34px 120px rgba(0,0,0,0.44), inset 0 1px 0 rgba(255,255,255,0.08)',
    padding: 38,
    direction: 'rtl',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
  },
  icon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(212,175,55,0.14)',
    border: '1px solid rgba(212,175,55,0.32)',
    color: '#e6c766',
    fontSize: 28,
    fontWeight: 950,
    flexShrink: 0,
  },
  title: {
    margin: 0,
    color: '#ffffff',
    fontSize: 34,
    lineHeight: 1.15,
    fontWeight: 900,
  },
  value: {
    margin: '38px 0 0',
    color: '#e6c766',
    fontSize: 72,
    lineHeight: 1,
    fontWeight: 950,
  },
  subtitle: {
    margin: '18px 0 0',
    color: '#b8b8b8',
    fontSize: 27,
    lineHeight: 1.45,
    fontWeight: 650,
  },
};
