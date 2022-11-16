import { FC } from "react";

type overlayProps = {
  goBack: Function;
  styleMode: string;
  children?: React.ReactNode;
};
const ScreenOverlay: FC<overlayProps> = ({
  goBack = null,
  styleMode,
  children,
}) => {
  return (
    <div className="screen-overlay-wrapper">
      <div
        className={`screen-overlay ${styleMode}`}
        onClick={() => {
          if (goBack) goBack();
          return;
        }}
      ></div>
      {children}
    </div>
  );
};

export default ScreenOverlay;
