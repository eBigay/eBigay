import styled from "styled-components";

type ButtonProps = {
  width: string;
  height: string;
  fontSize: string;
};

const PrimaryButton = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.clr1};
  color: ${({ theme }) => theme.colors.clr2};
  border-radius: ${({ theme }) => theme.borders.borderRad1};
  font-family: Poppins;
  font-weight: 500;
  transition: 0.3s ease;
  max-width: 100%;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  font-size: ${(props) =>
    props.fontSize === "xs" /* eslint-disable-line */
      ? props.theme.fontSizes.fsXs
      : props.fontSize === "s" /* eslint-disable-line */
      ? props.theme.fontSizes.fsS
      : props.fontSize === "m"
      ? props.theme.fontSizes.fsM
      : props.theme.fontSizes.fsL};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

export default PrimaryButton;