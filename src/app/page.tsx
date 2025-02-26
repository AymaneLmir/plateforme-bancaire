"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, Typography, Avatar, Stack, Divider } from "@mui/material";

export default function Accueil() {
  const router = useRouter();
  const [role, setRole] = useState("");

  // récupérer le role de l'utilisateur à partir des cookies
  useEffect(() => {
    const userRole = document.cookie.split("; ").find(row => row.startsWith("role="))?.split("=")[1];
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  // fonction pour déconnecter l'utilisateur
  const handleLogout = () => {
    document.cookie = "authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    router.refresh();
  };

  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    }}
  >
    <Card sx={{ width: 650, p: 4, boxShadow: 5, borderRadius: 3 }}>
      <CardContent>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ fontFamily: "Geist Mono, monospace" }} 
        >
          Profil Utilisateur
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          
          <Avatar sx={{ width: 130, height: 130, bgcolor: "#002D62", fontSize: 32 }}>
            JD
          </Avatar>

          
          <Box sx={{ height: "auto" }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              <strong>Nom :</strong> Jean
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              <strong>Prénom :</strong> Dupont
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              <strong>Email :</strong> jean.dupont@email.com
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              <strong>Identifiant :</strong> jdupont123
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              <strong>Rôle :</strong> {role || "Non défini"}
            </Typography>
          </Box>
        </Stack>

        
        {role === "administrateur" && (
          <Box sx={{ mt: 2, p: 2, bgcolor: "#E3F2FD", borderRadius: 2 }}>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              Vous avez accès à la gestion des clients,des comptes et des transactions.
            </Typography>
          </Box>
        )}

        {role === "conseiller" && (
          <Box sx={{ mt: 2, p: 2, bgcolor: "#E8F5E9", borderRadius: 2 }}>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ fontFamily: "Geist Mono, monospace" }} 
            >
              Vous avez accès à la gestion des clients,des comptes.
            </Typography>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5, fontSize: "1rem",fontFamily: "Geist Mono, monospace" ,backgroundColor: "#002D62", "&:hover": { backgroundColor: "#001F4D" } }}
          onClick={handleLogout}
        >
          Déconnexion
        </Button>
      </CardContent>
    </Card>
  </Box>
);
}
