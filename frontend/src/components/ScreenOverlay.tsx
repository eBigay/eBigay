import { FC } from "react";

type OverlayProps = {
  goBack: Function;
  styleMode: string;
  children?: React.ReactNode;
};
const ScreenOverlay: FC<OverlayProps> = ({
  goBack = null,
  styleMode,
  children,
}) => {
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
