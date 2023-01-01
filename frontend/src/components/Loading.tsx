import LoadingContainer, {
  Spinner,
  SpinnerContainer,
} from "../assets/styles/base/Loading.styled";

type InputProps = {
  size?: string;
  pos?: string;
};

const Loading = ({ size, pos }: InputProps) => (
  <LoadingContainer pos={pos}>
    <SpinnerContainer size={size}>
      <svg>
        <Spinner cx="50" cy="50" r="45" />
      </svg>
    </SpinnerContainer>
  </LoadingContainer>
);

export default Loading;
