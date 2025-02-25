"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, Typography, Avatar, Stack, Divider } from "@mui/material";


export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = document.cookie.split("; ").find(row => row.startsWith("role="))?.split("=")[1];
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = "authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    router.refresh();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
      <Card sx={{ width: 450, p: 4, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Profil Utilisateur
          </Typography>

          <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 3 }}>
            
            <Avatar sx={{ width: 80, height: 80, bgcolor: "#002D62", fontSize: 32 }}>JD</Avatar>

            <Box>
              <Typography variant="h6"><strong>Nom :</strong> Jean Dupont</Typography>
              <Typography variant="h6"><strong>Identifiant :</strong> jdupont123</Typography>
              <Typography variant="h6"><strong>Rôle :</strong> {role || "Non défini"}</Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.5, fontSize: "1rem", backgroundColor: "#002D62", "&:hover": { backgroundColor: "#001F4D" } }}
            onClick={handleLogout}
          >
            Déconnexion
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
