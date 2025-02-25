import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers"; // Permet de récupérer les cookies en SSR
import "./globals.css";
import NavBar from "./components/NavBar";
import AuthPage from "./auth/page"; // Page d'authentification

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Plateforme Bancaire",
  description: "Gestion des comptes, transactions et clients",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookiesList = await cookies(); 
  const isAuthenticated = cookiesList.get("authenticated")?.value === "true"; 

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!isAuthenticated ? (
          <AuthPage />
        ) : (
          <>
            <NavBar title="Plateforme Bancaire" />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
