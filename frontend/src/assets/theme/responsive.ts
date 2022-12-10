import { css } from "styled-components";
import theme from "./theme";

type cssParams = Parameters<typeof css>;
const keys = Object.keys(theme.breakpoints) as Array<
  keyof typeof theme.breakpoints
>;

export const respondTo = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: cssParams) => {
    return css`
      @media (width < ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof theme.breakpoints, Function>);
