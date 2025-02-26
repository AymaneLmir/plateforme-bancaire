"use client";
import { useState } from "react";
import { mockClients } from "../mock/mockClients";
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TransactionForm from "./TransactionForm";

export default function TransactionsPage() {
  const [clients, setClients] = useState(mockClients);
  const [expanded, setExpanded] = useState<string | false>(mockClients[0]?.id || false);

  const handleTransaction = (clientId: string, compteId: string, montant: number, type: "depot" | "retrait") => {
    setClients((prevClients) =>
      prevClients.map((client) => {
        if (client.id === clientId) {
          return {
            ...client,
            comptes: client.comptes.map((compte) => {
              if (compte.id === compteId) {
                if (type === "depot") {
                  return { ...compte, solde: compte.solde + montant };
                } else if (compte.solde >= montant) {
                  return { ...compte, solde: compte.solde - montant };
                } else {
                  alert("Fonds insuffisants !");
                }
              }
              return compte;
            }),
          };
        }
        return client;
      })
    );
  };

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "Geist Mono, monospace" }}>
        Transactions des Comptes
      </Typography>

      {clients.map((client) => (
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
            {client.comptes.map((compte) => (
              <Paper key={compte.id} style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#D3D3D3" }}>
                <Typography variant="h6" sx={{ fontFamily: "Geist Mono, monospace" }}>
                  {compte.type} - Solde: {compte.solde}€
                </Typography>
                <TransactionForm
                  clientId={client.id}
                  compteId={compte.id}
                  handleTransaction={handleTransaction}
                />
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
