function RequireAuth({ children }) {
  const { user, signIn, signOut } = useContext(UserContext);

  if (!user.isAuthenticathed) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default RequireAuth;
