import LoadingContainer, {
  Spinner,
  SpinnerContainer,
} from "../assets/styles/base/Loading.styled";

type InputProps = {
  size?: string;
  pos?: string;
  absolutePos?: boolean;
  className?: string;
  height?: string;
  marginTop?: string;
};

const Loading = ({
  className,
  size,
  pos,
  absolutePos,
  height,
  marginTop,
}: InputProps) => (
  <LoadingContainer
    pos={pos}
    absolutePos={absolutePos}
    className={className}
    height={height}
    marginTop={marginTop}
  >
    <SpinnerContainer size={size}>
      <svg>
        <Spinner cx="50" cy="50" r="45" />
      </svg>
    </SpinnerContainer>
  </LoadingContainer>
);

export default Loading;
