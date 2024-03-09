import { ThemeProvider } from "@material-tailwind/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
