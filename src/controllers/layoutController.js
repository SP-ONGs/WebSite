// --> Variables <-- //

// React
import { createContext, useContext, useState } from "react";
const LayoutContext = createContext(null);


// --> Functions <-- //
export function LayoutProvider({ children }) {
  const [modal, setModal] = useState("loginONG");

  return (
    <LayoutContext.Provider value={{ modal, setModal }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
