import axios from "../api/axios";
import useAuthContext from "./useAuthContext";

const useRefreshToken = () => {
  const { dispatch } = useAuthContext();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    dispatch({
      type: "REFRESH_TOKEN",
      payload: {
        accessToken: response.data.accessToken,
        roles: response.data.roles,
        user: response.data.user,
      },
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
