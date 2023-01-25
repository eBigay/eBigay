import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasicToastContainer = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      draggable
      theme="light"
    />
  );
};

export default BasicToastContainer;
