import React, { createContext, useContext, useState } from "react";
const AuthContextCreate = createContext();

const AuthContext = ({ children }) => {
  const [Auhtenticated, setAuhtenticated] = useState(false);
  const [CurrentUserData, setCurrentUserData] = useState([]);
  return (
    <AuthContextCreate.Provider
      value={{
        Auhtenticated,
        setAuhtenticated,
        CurrentUserData,
        setCurrentUserData,
      }}
    >
      {children}
    </AuthContextCreate.Provider>
  );
};

export const UserState = () => {
  return useContext(AuthContextCreate);
};

export default AuthContext;
