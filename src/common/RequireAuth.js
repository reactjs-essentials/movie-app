import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
function RequireAuth({ children }) {
  const { user, signIn, signOut } = useContext(UserContext);
  console.log("user from require Auth", user);

  if (!user.isAuthenticathed) {
    return <Navigate to="/loginrequired" />;
  }
  return children;
}

export default RequireAuth;
