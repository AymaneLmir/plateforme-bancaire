"use client";
import { useState } from "react";
import { mockClients } from "../mock/mockClients";
import { Typography, Paper } from "@mui/material";
import TransactionForm from "./TransactionForm";

export default function TransactionsPage() {
  const [clients, setClients] = useState(mockClients);

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

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Transactions des Comptes
      </Typography>

      {clients.map((client) => (
        <Paper key={client.id} style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h5">{client.nom} {client.prenom}</Typography>

          {client.comptes.map((compte) => (
            <div key={compte.id}>
              <Typography variant="h6">{compte.type} - Solde: {compte.solde}€</Typography>
              <TransactionForm
                clientId={client.id}
                compteId={compte.id}
                handleTransaction={handleTransaction}
              />
            </div>
          ))}
        </Paper>
      ))}
    </div>
  );
}
