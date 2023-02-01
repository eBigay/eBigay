import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
})`
  .Toastify__toast--success {
    svg {
      fill: #fbb527;
    }
  }
  .Toastify__progress-bar--success {
    background: #fbb527 !important;
  }
`;

export default StyledToastContainer;
