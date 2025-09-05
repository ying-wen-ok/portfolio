import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { skillTags } from  "../../data/skillTags";

/* ====== 颜色 ====== */
const BG = "#121212";
const FG = "#eaeaea";
const SUB = "#9aa0a6";
const BORDER = "rgba(255,255,255,0.08)";
const YELLOW = "#FFFF00";

/* ====== Section / 布局 ====== */
const Section = styled.section`
  background: ${BG};
  color: ${FG};
  padding: 28px 10% 100px;
  scroll-margin-top: 80px;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

/* ====== Hint（点击提示） ====== */
const Hint = styled(motion.div)`
  font-size: 0.95rem;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.9);
  margin-bottom: 10px;
  user-select: none;
`;

/* ====== Bubbles ====== */
const BubblesRow = styled(motion.div)`
  margin: 14px 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Bubble = styled(motion.button)`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? YELLOW : "rgba(255,255,255,0.18)")};
  background: ${({ $active }) => ($active ? "rgba(255,255,0,0.15)" : "rgba(255,255,255,0.08)")};
  color: ${({ $active }) => ($active ? YELLOW : "#eaeaea")};
  font-size: 0.95rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background .2s ease, border-color .2s ease, color .2s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "rgba(255,255,0,0.22)" : "rgba(255,255,255,0.16)")};
    border-color: ${({ $active }) => ($active ? YELLOW : "rgba(255,255,255,0.35)")};
  }
`;

/* ====== Cards ====== */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 一排最多三个、占满横向空间 */
  gap: 10px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${BORDER};
  transition: transform .2s ease, border-color .2s ease;
  &:hover { transform: translateY(-2px); border-color: rgba(255,255,255,.16); }
`;

const Thumb = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Caption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
  border-top: 1px solid ${BORDER};

  .title {
    margin: 0;
    font-size: 16px;
    color: #fff;
    letter-spacing: .2px;
  }
  .kicker {
    color: ${SUB};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .18em;
  }
`;

/* ====== framer-motion variants ====== */
const bubblesVariants = {
  hidden:  { opacity: 0, y: -18 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const bubbleItem = {
  hidden:  { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState(null);
  const gridRef = useRef(null);

  const toggleTag = (t) => {
    setActiveTag(prev => (prev === t ? null : t));
    requestAnimationFrame(() =>
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  const visible = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter(p => (p.tags || []).includes(activeTag));
  }, [activeTag]);

  return (
    <Section id="projects">
      <Container>
        {/* 提示：轻微上下浮动 + 逐步显现 */}
        <Hint
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: 3, repeatType: "mirror", ease: "easeInOut" }}
        >
          CLICK A BUBBLE TO FILTER PROJECTS
        </Hint>
      
        {/* Bubbles：进入视口时从上到下依次出现；hover、tap 有缩放 */}
        <BubblesRow
          variants={bubblesVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          {skillTags.map(t => (
            <Bubble
              key={t}
              $active={activeTag === t}
              variants={bubbleItem}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleTag(t)}
              aria-pressed={activeTag === t}
            >
              {t}
            </Bubble>
          ))}
        </BubblesRow>

        {/* {activeTag && (
          <div style={{ color: SUB, margin: "-4px 0 12px" }}>
            Filtering by <span style={{ color: YELLOW, fontWeight: 600 }}>{activeTag}</span> — click again to reset
          </div>
        )} */}

        <Grid ref={gridRef}>
          {visible.map(p => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card>
                {p.cover && <Thumb src={p.cover} alt={p.title} />}
                <Caption>
                  <h3 className="title">{p.title}</h3>
                  <div className="kicker">{p.kicker}</div>
                </Caption>
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
