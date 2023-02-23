import { useEffect } from "react";

let cloudinary;
let widget;

const UploadWidget = ({ children, onUpload }) => {
  useEffect(() => {
    cloudinary = window.cloudinary;

    requestIdleCallback(() => {
      if (!widget) {
        widget = createWidget();
      }
    });
  }, []);

  function createWidget() {
    const options = {
      cloudName: process.env.VITE_CLOUD_NAME,
      uploadPreset: process.env.VITE_CLOUD_PRESET,
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === "success") {
        onUpload(error, result, widget);
      }
    });
  }

  function open() {
    if (!widget) {
      widget = createWidget();
    }
    widget && widget.open();
  }

  return (
    <>
      {children({
        cloudinary: cloudinary,
        widget: widget,
        open,
      })}
    </>
  );
};

export default UploadWidget;