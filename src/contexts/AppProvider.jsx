import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({
  children,
}) => {
  const [user, updateUser] = useState(null);

  useEffect(
    () => {
      const localStorageUser = localStorage.getItem('userToken');
      if (localStorageUser) {
        updateUser(JSON.parse(localStorageUser));
      }
    },
    [],
  );

  const logout = () => {
    localStorage.removeItem('userToken');
    updateUser(null);
  };

  return (
    <AppContext.Provider value={{
      user,
      updateUser,
      logout,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
