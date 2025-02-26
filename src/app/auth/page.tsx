"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Card, CardContent, TextField, Typography, InputAdornment, Avatar } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useState } from "react";


export default function AuthPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'admin', password: 'admin123', role: 'administrateur' },
    { username: 'user', password: 'user123', role: 'conseiller' },
  ];

   // fonction de gestion de la connexion qui vérifie si l'utilisateur et le mot de passe sont corrects
  const handleLogin = async () => {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // si l'utilisateur est trouvé on le marque comme authentifié et on définit son role
      document.cookie = `authenticated=true; path=/`;
      document.cookie = `role=${user.role}; path=/`; 
      router.refresh(); 
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#005A9C",
        fontFamily: "Geist Mono, monospace",
      }}
    >
      <Card sx={{ width: 350, p: 3, boxShadow: 3 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <Avatar sx={{ bgcolor: "#002D62", width: 80, height: 80, mb: 2 }}>
            <AccountCircle sx={{ fontSize: 70 }} />
          </Avatar>

          <Typography variant="h5" gutterBottom textAlign="center" sx={{ fontFamily: "Geist Mono, monospace" }}>
            Connexion
          </Typography>
          
          <TextField
            label="Identifiant"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{ fontFamily: "Geist Mono, monospace" }}
          />
          <TextField
            label="Mot de passe"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            sx={{ fontFamily: "Geist Mono, monospace" }}
          />
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1, fontFamily: "Geist Mono, monospace" }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#002D62", fontFamily: "Geist Mono, monospace" }}
            onClick={handleLogin}
          >
            Se connecter
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
