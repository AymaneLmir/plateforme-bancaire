import { useState, useEffect } from "react"; 
import { Paper, TextField, Button, Typography } from "@mui/material";

// Définition du type Client
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

type OmitId<T> = Omit<T, "id">;

// Définition des propriétés du formulaire d'ajout et d'édition de clients
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
    comptes: [], 
  });
  
  //mettre à jour l'état du formulaire lorsqu'on sélectionne un client à modifier
  useEffect(() => {
    if (clientToEdit) {
      setNewClient({
        nom: clientToEdit.nom,
        prenom: clientToEdit.prenom,
        email: clientToEdit.email,
        telephone: clientToEdit.telephone,
        dateNaissance: clientToEdit.dateNaissance,
        adresse: clientToEdit.adresse,
        comptes: clientToEdit.comptes || [], 
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
      comptes: [], 
    });
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6" sx={{ fontFamily: "Geist Mono, monospace" }}>{clientToEdit ? "Modifier un client" : "Ajouter un client"}</Typography>
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
        <Button variant="contained"  onClick={handleSubmit} sx={{  backgroundColor: "#002D62", fontFamily: "Geist Mono, monospace" }}>
          {clientToEdit ? "Modifier" : "Ajouter"}
        </Button>
      </div>
    </Paper>
  );
}
