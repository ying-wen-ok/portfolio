import styled from 'styled-components';
import { motion } from 'framer-motion';
import myPhoto from '../../assets/myPhoto.jpg';

const YELLOW = '#FFFF00';
const BLACK = '#121212';

const HeroSection = styled.section`

  height: clamp(240px, 32vh, 360px); 

  background-color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 70px 10% 0;
  position: relative;
  overflow: hidden;
  justify-content: flex-start;
   @media (max-width: 768px) {
    height: auto;                 /* 取消固定高度 */
    padding: 72px 20px 24px;      /* 更紧凑的内边距 */
  }
`;

const CornerLabel = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 10%;
  color: rgba(200, 200, 200, 0.75);
  font-size: 0.7rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  user-select: none;
  z-index: 2;
   @media (max-width: 768px) {
    position: static;             /* 不再绝对定位 */
    margin-bottom: 6px;
    font-size: 0.65rem;
    letter-spacing: 0.24em;
  }
`;

const AboutWrap = styled(motion.div)`
  position: absolute;
  left: 10%;
  top: 25%;
  max-width: 720px;
  color: #fff;

  &::selection, & *::selection { color: ${YELLOW};  background: ${BLACK}; }
  &::-moz-selection, & *::-moz-selection { color: ${YELLOW}; background:  ${BLACK}; }

   @media (max-width: 768px) {
    position: static;             /* 不再绝对定位 */
    max-width: none;
  }
`;

const AboutText = styled.p`
  margin: 12px 0 0;
  font-size: 15.5px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const LinksRow = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 18px;

  a {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover { color: rgba(255,255,255,0.95); }
  }
`;

const Photo = styled(motion.img)`
  position: absolute;
  top: 25%;
  right: 10%;
  width: 10%;
  height: auto;
  border-radius: 10%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
   @media (max-width: 768px) {
    position: static;             /* 不再绝对定位，避免覆盖文字 */
    align-self: flex-end;         /* 靠右放在文字下方 */
    width: 96px;                  /* 或 24vw，看你喜好 */
    margin-top: 12px;
    border-radius: 12px;
  }
`;
export default function Hero() {
  
  return (
    <HeroSection id="hero">
     
      <CornerLabel
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >
        ABOUT
      </CornerLabel>

      <AboutWrap
        initial={{ y: -12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <AboutText>
          Full‑stack software engineer (Tech Lead) with experience building large‑scale reporting systems for NYPD Officers.
          I work across C#/.NET, Angular, TypeScript, and SQL Server, with interests in finance,
          statistics, and machine learning. This site highlights work beyond a resume — academic ML/Stats,
          finance analytics, system design diagrams, OOD exercises, and data structures and algorithms practices.
        </AboutText>

        <LinksRow>
          <a href="mailto:ying.wen.ok@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ying-wen" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ying-wen-ok" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/YingLCAccount/" target="_blank" rel="noreferrer">LeetCode</a>
        </LinksRow>
      </AboutWrap>    

      {/* 照片（移至 ABOUT 右侧） */}
      <Photo
        src={myPhoto}
        alt="Me"      
        viewport={{ once: false, amount: 0.6 }}
      />
    </HeroSection>
  );
}