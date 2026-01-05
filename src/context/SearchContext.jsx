import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ EMPTY STRING

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
