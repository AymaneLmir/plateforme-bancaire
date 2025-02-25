"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' },
  ];

  const handleLogin = async () => {
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      document.cookie = "authenticated=true; path=/"; 
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
        backgroundColor: "#f4f4f4",
      }}
    >
      <Card sx={{ width: 350, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign="center">
            Connexion
          </Typography>
          <TextField
            label="Identifiant"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Mot de passe"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#002D62" }}
            onClick={handleLogin}
          >
            Se connecter
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
