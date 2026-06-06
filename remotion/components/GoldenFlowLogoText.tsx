import type {CSSProperties} from 'react';
import {Img, staticFile} from 'remotion';

type GoldenFlowLogoTextProps = {
  compact?: boolean;
};

export const GoldenFlowLogoText = ({compact = false}: GoldenFlowLogoTextProps) => {
  return (
    <div style={compact ? styles.compactWrap : styles.wrap}>
      <Img src={staticFile('brand/goldenflow-icon-gold.png')} style={compact ? styles.compactLogo : styles.logo} />
      {!compact ? (
        <div style={styles.textStack}>
          <p style={styles.brand}>GoldenFlow</p>
          <p style={styles.crm}>CRM</p>
        </div>
      ) : null}
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 22,
  },
  compactWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 154,
    height: 154,
    objectFit: 'contain',
    filter: 'drop-shadow(0 20px 55px rgba(212,175,55,0.28))',
  },
  compactLogo: {
    width: 104,
    height: 104,
    objectFit: 'contain',
    filter: 'drop-shadow(0 16px 42px rgba(212,175,55,0.3))',
  },
  textStack: {
    textAlign: 'center',
  },
  brand: {
    margin: 0,
    color: '#ffffff',
    fontSize: 54,
    fontWeight: 950,
    letterSpacing: 0,
  },
  crm: {
    margin: '8px 0 0',
    color: '#d4af37',
    fontSize: 38,
    fontWeight: 950,
    letterSpacing: 0,
  },
};
