import { useState, useEffect } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";

type Client = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  adresse: string;
};

type OmitId<T> = Omit<T, "id">;

type AddClientFormProps = {
  onAddClient: (client: Client) => void;
  onEditClient: (client: Client) => void;
  columns: { id: keyof OmitId<Client>; label: string }[];
  clientToEdit?: Client | null;  
};

export default function AddClientForm({ onAddClient, onEditClient, columns, clientToEdit }: AddClientFormProps) {
  const [newClient, setNewClient] = useState<OmitId<Client>>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    adresse: "",
  });

  
  useEffect(() => {
    if (clientToEdit) {
      setNewClient({
        nom: clientToEdit.nom,
        prenom: clientToEdit.prenom,
        email: clientToEdit.email,
        telephone: clientToEdit.telephone,
        dateNaissance: clientToEdit.dateNaissance,
        adresse: clientToEdit.adresse,
      });
    }
  }, [clientToEdit]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!newClient.nom || !newClient.prenom || !newClient.email) return;

    if (clientToEdit) {
      onEditClient({ ...clientToEdit, ...newClient });
    } else {
      onAddClient({ id: Date.now().toString(), ...newClient });
    }

    setNewClient({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      dateNaissance: "",
      adresse: "",
    });
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6">{clientToEdit ? "Modifier un client" : "Ajouter un client"}</Typography>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {columns.map((column) => (
          <TextField
            key={column.id}
            label={column.label}
            name={column.id}
            value={newClient[column.id] ?? ""}
            onChange={handleInputChange}
            size="small"
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {clientToEdit ? "Modifier" : "Ajouter"}
        </Button>
      </div>
    </Paper>
  );
}
