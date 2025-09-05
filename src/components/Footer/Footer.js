import React from 'react';
import styled, { keyframes } from 'styled-components';


const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;


const FooterContainer = styled.footer`
  background: black;
  overflow: hidden;
  white-space: nowrap;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 8px 0;
`;

const ScrollText = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: ${scroll} 88s linear infinite;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;

  span {
    margin: 0 12px;
  }

  &:hover {
    color: #FFFF00; /* 亮黄色 hover 效果 */
  }
`;

export default function Footer() {
  return (
    <FooterContainer>     
      <ScrollText>
        <span>ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ Last Update 08 / 12/ 2025 ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ኈ ጿ COPYRIGHT 2025 ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ ኈ React ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ AWS EC2</span>
        <span>ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ Last Update 08 / 12/ 2025 ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ኈ ጿ COPYRIGHT 2025 ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ ኈ React ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ AWS EC2</span>
        <span>ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ Last Update 08 / 12/ 2025 ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ኈ ጿ COPYRIGHT 2025 ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ ኈ React ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ AWS EC2</span>
        <span>ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ Last Update 08 / 12/ 2025 ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ኈ ጿ COPYRIGHT 2025 ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ ኈ React ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ጿ AWS EC2</span>
      </ScrollText>      
    </FooterContainer>
  );
}



