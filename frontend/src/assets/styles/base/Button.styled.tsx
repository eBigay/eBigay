import styled from "styled-components";

type ButtonProps = {
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  disabled?: boolean;
};

const PrimaryButton = styled.button.attrs({
  className: "PrimaryButton",
})<ButtonProps>`
  background: ${({ theme }) => theme.colors.clr1};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  color: ${({ theme }) => theme.colors.clr2};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.borders.borderRad1};
  font-family: Poppins;
  font-weight: 500;
  transition: 0.3s ease;
  max-width: 100%;
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  font-size: ${({ theme, fontSize }) =>
    fontSize === "xs" /* eslint-disable-line */
      ? theme.fontSizes.fsXs
      : fontSize === "s" /* eslint-disable-line */
      ? theme.fontSizes.fsS
      : fontSize === "m"
      ? theme.fontSizes.fsM
      : theme.fontSizes.fsL};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    filter: ${({ disabled }) => !disabled && "brightness(110%)"};
  }
`;

export default PrimaryButton;
