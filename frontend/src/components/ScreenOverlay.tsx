import StyledScreenOverlay from "../assets/styles/components/ScreenOverlay.styled";

type OverlayProps = {
  goBack: Function;
  styleMode: string;
  children?: React.ReactNode;
};
const ScreenOverlay = ({
  goBack = () => {},
  styleMode,
  children,
}: OverlayProps) => {
  return (
    <div>
      <StyledScreenOverlay
        role="presentation" // solving 'jsx-a11y/no-static-element-interactions' (eslint)
        className={`${styleMode}`}
        onClick={() => {
          if (goBack) goBack();
        }}
      />
      {children}
    </div>
  );
};

export default ScreenOverlay;
