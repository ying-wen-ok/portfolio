// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { projects } from "../data/projects";

// —— 新增：PDF 相关样式 ——
const PdfWrap = styled.div`
  margin-top: 24px;
  border-top: 1px solid rgba(255,255,255,.08);
  padding-top: 14px;
`;

const PdfBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  h3 { margin: 0; font-size: 16px; color: #fff; letter-spacing: .3px; }
  a  { color: #FFFF00; text-decoration: none; font-size: 14px; }
  a:hover { opacity: .9; }
`;

const PdfViewer = styled.iframe`
  width: 100%;
  height: 88vh;          /* 大屏几乎整屏 */
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 6px;
  background: #111;

  @media (max-width: 900px) {
    height: 70vh;        /* 移动端稍微矮点 */
  }
`;

const Page = styled.div`
  background: #0b0b0b;
  color: #eaeaea;
  min-height: 100vh;
`;

const HeroImage = styled.div`
  height: 240px; /* 或用 clamp() 自适应 */
  background: ${({ src }) =>
    src ? `center/cover no-repeat url(${src})` : "#222"};
`;

const Body = styled.div`
  padding: 14px 10%;
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 18px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MetaLeft = styled.div`
  display: grid;
  gap: 10px;

  .block {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 10px;
  }
  .label {
    color: #9aa0a6;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .value {
    font-size: 14px;
  }
  a {
    color: #ffff00;
    text-decoration: none;
  }
`;

const MetaRight = styled.div`
  display: grid;
  gap: 14px;
  line-height: 1.6;
  color: #d8d8d8;
`;

/* —— Gallery 横向小图 —— */
const GalleryWrap = styled.div`
  margin-top: 24px;
`;
const GalleryTitle = styled.h3`
  color: #fff;
  margin: 0 0 12px 0;
  font-size: 16px;
  letter-spacing: 0.3px;
`;
const GalleryRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.18);
    border-radius: 999px;
  }
`;
const Thumb = styled.img`
  width: 220px;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  }
`;

/* —— 叠在 Navbar 上方的“X”按钮轨道（只负责右侧 X）——
   注意：它覆盖在 Navbar 上方，但不改变布局；
   为了不挡住其它元素，容器 pointer-events:none，按钮开启。 */
const NavCloseRail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;          /* 贴合你的 Navbar 高度（可微调） */
  padding: 0 3%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;  /* 容器不接收事件 */
  z-index: 1101;         /* 比 Navbar(1000) 高一点点 */
`;

const CloseX = styled.button`
  pointer-events: auto;  /* 只让按钮可点击 */
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-size: 30px;
  line-height: 1;
  padding: 6px 8px;
  cursor: pointer;
  transition: color 0.15s ease, transform 0.05s ease;
  &:hover {
    color: #ffffff;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default function ProjectPage() {
  const { slug } = useParams();
  const nav = useNavigate();
  const p = projects.find((x) => x.slug === slug);

  const handleClose = () => {
    // 有站内来源就后退，否则回首页
    if (
      document.referrer &&
      (() => {
        try {
          return new URL(document.referrer).origin === window.location.origin;
        } catch {
          return false;
        }
      })()
    ) {
      nav(-1);
    } else {
      nav("/");
    }
  };
  
  if (!p) {
    return (
      <>
        <Navbar />
        <div
          style={{
            minHeight: "70vh",
            padding: "90px 10%",
            color: "#eaeaea",
            background: "#0b0b0b",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Not Found</h1>
          <Link to="/" style={{ color: "#ffff00", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

const pdfUrl = p.pdfFile ? `${process.env.PUBLIC_URL}/pdf/${p.pdfFile}` : null;

  return (
    <>
      <Navbar />
      <NavCloseRail>
        <CloseX onClick={handleClose} aria-label="Back">
          ×
        </CloseX>
      </NavCloseRail>

      <Page>
        <HeroImage src={p.hero || p.cover} />

        <Body>
          <MetaGrid>
            <MetaLeft>
              <div className="block">
                <div className="label">Project</div>
                <div className="value">{p.title}</div>
              </div>
              <div className="block">
                <div className="label">Role</div>
                <div className="value">{p.meta.role}</div>
              </div>
              <div className="block">
                <div className="label">Stack / Focus</div>
                <div className="value">{p.meta.stack}</div>
              </div>
              <div className="block">
                <div className="label">Duration</div>
                <div className="value">{p.meta.duration}</div>
              </div>
              <div className="block">
                <div className="label">Tools</div>
                <div className="value">{p.meta.tools}</div>
              </div>

              {p.meta.links?.length > 0 && (
                <div className="block">
                  <div className="label">Links</div>
                  <div className="value">
                    {p.meta.links.map((l, i) => (
                      <div key={i}>
                        <a href={l.href} target="_blank" rel="noreferrer">
                          {l.text} →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </MetaLeft>

            <MetaRight>              
              {p.desc.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
             {pdfUrl && (
                <PdfWrap>
                  <PdfBar>
                    <h3>Full Report</h3>
                    <a href={pdfUrl} target="_blank" rel="noreferrer">Open in new tab →</a>
                  </PdfBar>

                  <PdfViewer
                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    title={`${p.title} Report`}
                  />
                </PdfWrap>
              )}               
              {p.gallery?.length > 0 && (
                <GalleryWrap>
                  <GalleryTitle>Gallery</GalleryTitle>
                  <GalleryRow>
                    {p.gallery.map((src, idx) => (
                      <Thumb
                        key={idx}
                        src={src}
                        alt={`${p.title} gallery ${idx + 1}`}
                      />
                    ))}
                  </GalleryRow>
                </GalleryWrap>
              )}
            </MetaRight>
          </MetaGrid>
        </Body>
      </Page>
      <Footer />
    </>
  );
}
