"use client";
import { useState } from "react";
import { mockClients } from "../mock/mockClients";
import { Typography } from "@mui/material";
import ClientsTable from "./ClientsTable";
import AddClientForm from "./AddClientForm";

type Client = {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    dateNaissance: string;
    adresse: string;
    comptes: { id: string; type: string; solde: number }[]; 
  };
  

const columns: { id: Exclude<keyof Client, "id" | "comptes">; label: string }[] = [
  { id: "nom", label: "Nom" },
  { id: "prenom", label: "Prénom" },
  { id: "email", label: "Email" },
  { id: "telephone", label: "Téléphone" },
  { id: "adresse", label: "Adresse" },
];

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [clientToEdit, setClientToEdit] = useState<Client | null>(null);

  const handleAddClient = (client: Client) => {
    setClients([...clients, client]);
  };

  const handleEditClient = (updatedClient: Client) => {
    setClients(
      clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
    setClientToEdit(null); 
  };

  const handleDeleteClient = (clientId: string) => {
    setClients(clients.filter((client) => client.id !== clientId)); 
  };

  const handleSelectClientForEdit = (client: Client) => {
    setClientToEdit(client); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: "Geist Mono, monospace" }}>
        Liste des Clients
      </Typography>
      <AddClientForm
        onAddClient={handleAddClient}
        onEditClient={handleEditClient}
        columns={columns}
        clientToEdit={clientToEdit} 
      />
      <ClientsTable
        clients={clients}
        columns={columns}
        onEditClient={handleSelectClientForEdit} 
        onDeleteClient={handleDeleteClient} 
      />
    </div>
  );
}
