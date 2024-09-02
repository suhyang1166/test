import styled from "styled-components";

interface InputProps {
  $hasError: boolean;
}

interface ButtonProps extends InputProps {
  $isEmpty: boolean;
}

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.exo2};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  }
`;

export const Form = styled.form`
  width: 500px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  p {
    position: absolute;
    bottom: -30px;
    left: 10px;
    color: ${({ theme }) => theme.colors.invalid};
    font-family: ${({ theme }) => theme.fonts.exo2};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  z-index: 1;
  opacity: ${({ $isEmpty, $hasError }) => ($isEmpty ? 1 : $hasError ? 0.5 : 1)};
  cursor: pointer;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 10px;
  border-radius: 7px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    font-family: ${({ theme }) => theme.fonts.exo2};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
    color: ${({ theme }) => theme.colors.white};
  }
  &:focus {
    border: 1px solid transparent;
    outline: 1px solid
      ${({ theme, $hasError }) =>
        $hasError ? theme.colors.invalid : theme.colors.vibrantGreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;
