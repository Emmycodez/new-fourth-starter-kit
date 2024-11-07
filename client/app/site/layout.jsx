import { ThemesProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/providers/UserProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const SiteLayout = ({ children }) => {
  return (
    <ThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </AuthProvider>
    </ThemesProvider>
  );
};

export default SiteLayout;
