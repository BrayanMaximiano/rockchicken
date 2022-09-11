import styled from "styled-components";

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
`;

export const LogoWrapper = styled.div`
  width: 110px;
  height: 100%;
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;
