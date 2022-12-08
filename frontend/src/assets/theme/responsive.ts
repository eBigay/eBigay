import { css } from "styled-components";
import theme from "./theme";

type CssParams = Parameters<typeof css>;
const keys = Object.keys(theme.breakpoints) as Array<
  keyof typeof theme.breakpoints
>;

const RespondTo = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: CssParams) => {
    return css`
      @media (width < ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof theme.breakpoints, Function>);

export default RespondTo;

export const MinWidth = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: CssParams) => {
    return css`
      @media (width > ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof theme.breakpoints, Function>);
