import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  background: #121212;
  padding: 12px 10%; /* 和 Hero 一致 */
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box; /* 确保 padding 生效 */
`;


const Brand = styled.a`
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-size: 20px;         
  font-weight: 400;         
  letter-spacing: 2px;   
  line-height: 1;
  font-family: 'Poppins', sans-serif;
`;


export default function Navbar() {
  return (
    <Nav>
        <Brand href="/">Ying Wen</Brand>
        <Brand href="/">Software Engineer</Brand>
        <Brand href="/">New York, NY</Brand>     
    </Nav>
  );
}
