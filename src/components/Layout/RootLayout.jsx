import { useState, useEffect } from "react";
import ResponsiveNavbar from "../Common/ResponsiveNavbar";
function RootLayout({ children }) {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ResponsiveNavbar/>
      <main className="flex-grow">{children}</main>
    </div>
  );
}

export default RootLayout;
