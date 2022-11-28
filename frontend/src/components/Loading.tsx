import LoadingContainer from "../assets/styles/base/Loading.styled";
import {
  Spinner,
  SpinnerContainer,
} from "../assets/styles/layout/Spinner.styled";

type InputProps = {
  width?: string;
  height?: string;
};

const Loading = ({ width = "100px", height = "100px" }: InputProps) => (
  <LoadingContainer>
    <SpinnerContainer width={width} height={height}>
      <svg>
        <Spinner cx="50" cy="50" r="45" />
      </svg>
    </SpinnerContainer>
  </LoadingContainer>
);

export default Loading;
