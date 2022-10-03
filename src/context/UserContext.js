import { createContext, useState } from "react";

export const userContextInitialState = {
  isAuthenticathed: false,
  username: "",
  givenName: "",
  token: "",
};

export const UserContext = createContext(userContextInitialState);

export function UserContextProvider({ children }) {
  const signIn = async (data = { username: "Johnny" }) => {
    console.log("SigningIn");
    try {
      const res = await fetch(`https://apimocha.com/authentication/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(data),
      });

      let userObj = {
        givenName: res.givenName,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        username: data.username,
        isAuthenticathed: true,
      };
      setUser(userObj);
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = () => {
    console.log("SigningOut");
    setUser(null);
  };
  const [user, setUser] = useState(userContextInitialState);
  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
