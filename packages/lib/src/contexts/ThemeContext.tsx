import React, { useContext, useState } from "react";

type ThemeContextProps = {
  isOpen: boolean;
};

const ThemeContext = React.createContext<any>({} as ThemeContextProps);

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("");
  const value = {
    setTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
