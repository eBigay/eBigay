import { css } from "styled-components";
import theme from "./assets/theme/theme";

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.laptopBreakpoint}) {
      ${props}
    }
  `;
};
