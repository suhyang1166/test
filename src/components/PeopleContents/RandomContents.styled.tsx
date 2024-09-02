import styled from "styled-components";

export const Article = styled.article`
  width: 100%;
  max-width: 493px;
  /* height: 100%; */
  height: 352px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 40px;
`;

export const Figure = styled.figure`
  width: 108px;
  height: 108px;
  border-radius: 50%;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h2 {
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.medium};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  }
  p {
    width: 100%;
    height: 90px;
    max-height: 100%;
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    word-break: keep-all;
  }
`;

export const More = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.azure};
  font-family: ${({ theme }) => theme.fonts.exo2};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
  text-align: ${({ theme }) => theme.textAligns.left};
  text-transform: uppercase;
  cursor: pointer;
  &::before {
    content: "";
    width: 105px;
    height: 1.8px;
    background: ${({ theme }) => theme.colors.azure};
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;
