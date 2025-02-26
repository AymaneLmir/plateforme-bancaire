"use client";
import { useState, useEffect } from "react";
import { mockClients } from "../mock/mockClients";
import {
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCompteForm from "./AddCompteForm";

type Compte = {
  id: string;
  clientId: string;
  type: string;
  solde: number;
};

export default function ComptesPage() {
  const [comptes, setComptes] = useState<Compte[]>([]);
  const [expanded, setExpanded] = useState<string | false>(mockClients[0]?.id || false);

// Extraction des comptes desdifferent clients
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

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "Geist Mono, monospace" }}>
        Liste des Comptes
      </Typography>
      
      {mockClients.map((client) => (
        <Accordion 
          key={client.id} 
          expanded={expanded === client.id} 
          onChange={handleChange(client.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" sx={{ fontFamily: "Geist Mono, monospace" }}>
              {client.nom} {client.prenom}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddCompteForm onAddCompte={handleAddCompte} clientId={client.id} />
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontFamily: "Geist Mono, monospace" }}>
                  Comptes pour ce client :
                </Typography>
              </Grid>
              {comptes.filter(compte => compte.clientId === client.id).map((compte) => (
                <Grid item xs={12} sm={6} key={compte.id}>
                  <Paper style={{ padding: "10px",backgroundColor:'#D3D3D3' }}>
                    <Typography variant="body1" sx={{ fontFamily: "Geist Mono, monospace" }}>
                      Type: {compte.type}
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: "Geist Mono, monospace" }}>
                      Solde: {compte.solde} €
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
