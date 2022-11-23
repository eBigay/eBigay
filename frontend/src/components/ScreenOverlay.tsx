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
    <div className="screen-overlay-wrapper">
      <div
        role="presentation" // solving 'jsx-a11y/no-static-element-interactions' (eslint)
        className={`screen-overlay ${styleMode}`}
        onClick={() => {
          if (goBack) goBack();
        }}
      />
      {children}
    </div>
  );
};

export default ScreenOverlay;
