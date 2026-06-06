import type {CSSProperties} from 'react';

type CTAButtonProps = {
  children: string;
  style?: CSSProperties;
};

export const CTAButton = ({children, style}: CTAButtonProps) => {
  return <div style={{...styles.button, ...style}}>{children}</div>;
};

const styles: Record<string, CSSProperties> = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 96,
    padding: '0 58px',
    borderRadius: 999,
    background: 'linear-gradient(90deg, #b8942e 0%, #d4af37 48%, #f4da7a 100%)',
    color: '#050505',
    fontSize: 34,
    fontWeight: 950,
    boxShadow: '0 24px 86px rgba(212,175,55,0.26)',
    direction: 'rtl',
  },
};
