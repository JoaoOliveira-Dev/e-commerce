"use client";

import BarNav from "@/components/dashboard/navdashboard";
import { SideNav } from "@/components/navbardashboard/side-nav";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../../theme/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const theme = createTheme();

  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          {/* <BarNav /> */}
          <SideNav
            open={open}
            onClose={() => {
              setOpen(!open);
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
