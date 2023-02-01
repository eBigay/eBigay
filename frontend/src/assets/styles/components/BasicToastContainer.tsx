import "react-toastify/dist/ReactToastify.css";
import StyledToastContainer from "../layout/Toast.styled";

const BasicToastContainer = () => {
  return (
    <StyledToastContainer
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
