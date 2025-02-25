"use client";
import { useState, useEffect } from "react";
import { mockClients } from "../mock/mockClients";
import { Typography, Grid, Paper } from "@mui/material";
import AddCompteForm from "./AddCompteForm";

type Compte = {
  id: string;
  clientId: string;
  type: string;
  solde: number;
};

export default function ComptesPage() {
  const [comptes, setComptes] = useState<Compte[]>([]);

  
  useEffect(() => {
    const allComptes = mockClients.flatMap(client => 
      client.comptes.map((compte: Omit<Compte, "clientId">) => ({
        ...compte,
        clientId: client.id, 
      }))
    );
    setComptes(allComptes);
  }, []);

  const handleAddCompte = (compte: Compte) => {
    setComptes([...comptes, compte]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Liste des Comptes
      </Typography>
      
      {mockClients.map((client) => (
        <Paper key={client.id} style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h5">{client.nom} {client.prenom}</Typography>
          
          
          <AddCompteForm onAddCompte={handleAddCompte} clientId={client.id} />
          
          
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Typography variant="h6">Comptes pour ce client :</Typography>
            </Grid>
            {comptes.filter(compte => compte.clientId === client.id).map((compte) => (
              <Grid item xs={12} sm={6} key={compte.id}>
                <Paper style={{ padding: "10px" }}>
                  <Typography variant="body1">Type: {compte.type}</Typography>
                  <Typography variant="body1">Solde: {compte.solde} €</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
