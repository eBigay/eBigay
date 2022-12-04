import { CircularProgress } from "@mui/material";
import LoadingContainer from "../assets/styledComponents/base/Loading.styled";

const Loading = () => (
  <LoadingContainer>
    <CircularProgress size={80} style={{ color: "#fbb527" }} />
  </LoadingContainer>
);

export default Loading;
