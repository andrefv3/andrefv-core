import { ThemeProvider } from "@shared/context";

export const RootProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);