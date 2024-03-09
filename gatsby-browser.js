import "./src/styles/global.css"
import React from 'react';
import Layout from "./src/components/layout/Layout.tsx"

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};