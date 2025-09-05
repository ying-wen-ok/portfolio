import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Fab = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 2000;                    /* 提高层级，压过内容 */
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(0,0,0,.55);
  color: #fff;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: opacity .2s ease, transform .12s ease, background .2s ease;
  opacity: ${({visible}) => (visible ? 1 : 0)};
  pointer-events: ${({visible}) => (visible ? 'auto' : 'none')};
  &:hover { background: rgba(255,255,255,.12); }
  &:active { transform: translateY(1px); }
`;

export default function BackToTop({ threshold = 120 }) {  // 阈值别太高
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <Fab
      visible={show}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </Fab>
  );
}
