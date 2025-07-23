// src/context/theme.js
import React, { createContext, useContext } from "react";

// 1. Create the context with default values
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}

// 3. Export the context and provider
export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;
