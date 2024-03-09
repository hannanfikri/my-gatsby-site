import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { theme } from "../../themes/theme";

const Layout: React.FC = ({ children }) => {
  const customTheme = { theme };
  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
};

export default Layout;
