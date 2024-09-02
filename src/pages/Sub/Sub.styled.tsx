import styled from "styled-components";

interface backgroundProps {
  $BG: string;
}

export const SubSection = styled.section<backgroundProps>`
  width: 100vw;
  height: 100vh;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16%;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url(${({ $BG }) => $BG}) center/cover no-repeat;
    z-index: -2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const SubTextContents = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  h3 {
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: ${({ theme }) => theme.lineHeights.medium};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  }
`;

export const SubTextSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  p:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.white80};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    word-break: keep-all;
  }
  span {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.white60};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: ${({ theme }) => theme.fontSizes.exSmall};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.exTight};
  }
`;
