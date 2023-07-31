import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <div>{children}</div> : <Navigate to={"/login"} />;
};

export default RequireAuth;
