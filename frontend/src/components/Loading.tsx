import LoadingContainer, {
  Spinner,
  SpinnerContainer,
} from "../assets/styles/base/Loading.styled";

type InputProps = {
  size?: string;
  pos?: string;
  absolutePos?: boolean;
  className?: string;
};

const Loading = ({ className, size, pos, absolutePos }: InputProps) => (
  <LoadingContainer pos={pos} absolutePos={absolutePos} className={className}>
    <SpinnerContainer size={size}>
      <svg>
        <Spinner cx="50" cy="50" r="45" />
      </svg>
    </SpinnerContainer>
  </LoadingContainer>
);

export default Loading;
