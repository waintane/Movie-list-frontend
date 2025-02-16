import { createContext, useState, useEffect, ReactNode } from "react";
import getLocalStorage from "../scripts/getLocalStorage";

// Define types for context
interface AuthContextType {
  accessToken: string | null;
  user: string | null;
  setAccessToken: (token: string | null) => void;
  setUser: (user: string | null) => void;
}

// Create context with a default value
export const AuthContext = createContext<AuthContextType | null>(null);

// Define type for provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserToken = async () => {
      try {
        const user = getLocalStorage("user");
        if (user === null) return;
        setAccessToken(user.token);
        setUser(user.firstName);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, user, setAccessToken, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
