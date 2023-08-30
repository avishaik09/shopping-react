import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function Protected({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }else if (user){
    return <Navigate to="/" replace={true}></Navigate>

  }
  return children;
}

export default Protected;
