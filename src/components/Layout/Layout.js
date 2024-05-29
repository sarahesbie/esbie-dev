import React from "react";
import { layout, headerContent } from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={layout}>
      <header>
        <div className={headerContent}>header content</div>
      </header>
      {children}
    </div>
  );
}
