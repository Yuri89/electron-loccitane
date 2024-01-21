// toggleTheme.tsx

import React, { useState, ReactNode } from "react";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { ThemeProvider } from "styled-components";

interface ProviderThemeProps {
  children: ReactNode;
}


const ProviderTheme: React.FC<ProviderThemeProps> = ({ children }) => {
  const [useTheme, setUseTheme] = useState(light);

  const getTheme = () => {
    setUseTheme((prevTheme) => (prevTheme === light ? dark : light));
    console.log('mudando');
  };
  
  const mudarTema = () => {
    getTheme();
    console.log('clicando');
  };

  return (
    <ThemeProvider theme={useTheme}>
      {children}
    </ThemeProvider>
  );
};

export { ProviderTheme };