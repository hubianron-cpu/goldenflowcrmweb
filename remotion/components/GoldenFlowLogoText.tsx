import type {CSSProperties} from 'react';
import {useState} from 'react';
import {Img, staticFile} from 'remotion';

type GoldenFlowLogoTextProps = {
  compact?: boolean;
};

export const GoldenFlowLogoText = ({compact = false}: GoldenFlowLogoTextProps) => {
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);

  return (
    <div style={compact ? styles.compactWrap : styles.wrap}>
      <div style={compact ? styles.compactLogoFrame : styles.logoFrame}>
        {useFallbackLogo ? <span style={compact ? styles.compactFallbackMark : styles.fallbackMark}>GF</span> : null}
        <Img
          src={staticFile('brand/goldenflow-icon-gold.png')}
          style={{
            ...(compact ? styles.compactLogo : styles.logo),
            opacity: useFallbackLogo ? 0 : 1,
          }}
          onError={() => setUseFallbackLogo(true)}
        />
      </div>
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
    position: 'absolute',
    inset: 0,
    width: 154,
    height: 154,
    objectFit: 'contain',
    filter: 'drop-shadow(0 20px 55px rgba(212,175,55,0.28))',
  },
  compactLogo: {
    position: 'absolute',
    inset: 0,
    width: 104,
    height: 104,
    objectFit: 'contain',
    filter: 'drop-shadow(0 16px 42px rgba(212,175,55,0.3))',
  },
  logoFrame: {
    position: 'relative',
    width: 154,
    height: 154,
  },
  compactLogoFrame: {
    position: 'relative',
    width: 104,
    height: 104,
  },
  fallbackMark: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d4af37',
    fontSize: 54,
    fontWeight: 950,
    letterSpacing: 0,
    filter: 'drop-shadow(0 20px 55px rgba(212,175,55,0.28))',
  },
  compactFallbackMark: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d4af37',
    fontSize: 36,
    fontWeight: 950,
    letterSpacing: 0,
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
