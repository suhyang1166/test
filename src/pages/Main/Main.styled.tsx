import styled from "styled-components";

export const MainWrap = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16%;
`;

export const MainSection = styled.section`
  width: 100%;
`;

export const MainTitle = styled.h1`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.exo2};
  font-size: ${({ theme }) => theme.fontSizes.exLarge};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights.large};
  letter-spacing: ${({ theme }) => theme.letterSpacings.exWide};
`;

export const MainContents = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
