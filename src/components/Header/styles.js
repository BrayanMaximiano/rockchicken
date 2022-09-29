import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  height: 100px;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(142, 29, 0, 1) 64%
  );
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;



  @media (max-width: 414px){
    height: 80px;
    overflow-y: hidden;
  }
  @media (max-width: 375px){
    height: 70px;
  }
`;


export const LogoWrapper = styled.div`
  width: 70px;
  height: 90%;
  overflow-y: hidden;
  @media (max-width: 414px){
     width: 80px;
     }

     @media (max-width: 375px){
      width: 70px;
     }
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

const FlipAnimation = keyframes`
  0%{
    transform: rotateX(0);
  }
  100%{
    transform: rotateX(180deg);
  }
`