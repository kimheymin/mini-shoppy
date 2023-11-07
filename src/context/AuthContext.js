import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { login, loginState, login2, logout } from "../api/firebase";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    loginState((user) => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, login2, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
