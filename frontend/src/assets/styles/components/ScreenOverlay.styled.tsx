import styled from "styled-components";

const StyledScreenOverlay = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  &.darken {
    background-color: rgba(0, 0, 0, 0.64);
  }
  &.heavy-dark {
    background-color: rgba(0, 0, 0, 0.84);
  }
  &.transparent {
    background-color: transparent;
  }
`;

export default StyledScreenOverlay;
