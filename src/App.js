
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';
import ProjectPage from "./pages/ProjectPage";

const AppShell = styled.div`
  min-height: 100vh;           
  display: flex;
  flex-direction: column;
  background: #121212;         
`;

const Main = styled.main`
 flex: 1;    
  padding-top: 0;
`;

function Home() {
  return (
    <>
    <AppShell>
      <GlobalStyles />
       <Navbar />
      <Main>
        <Hero />
        <Projects />
      </Main>
      <BackToTop />
      <Footer />
    </AppShell>     
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/:slug" element={<ProjectPage />} />
      </Routes>
     
    </BrowserRouter>
  );
}