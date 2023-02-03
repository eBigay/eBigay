import { useEffect, useRef } from "react";

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
      cloudName: "di8d3r9vo",
      uploadPreset: "g4fcacfw",
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
