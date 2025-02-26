import { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";

type Compte = {
  id: string;
  clientId: string;
  type: string;
  solde: number;
};

type AddCompteFormProps = {
  onAddCompte: (compte: Compte) => void;
  clientId: string;
};

export default function AddCompteForm({ onAddCompte, clientId }: AddCompteFormProps) {
  const [newCompte, setNewCompte] = useState<Omit<Compte, "id">>({
    clientId,
    type: "",
    solde: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCompte({ ...newCompte, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!newCompte.type || newCompte.solde <= 0) return;

    const compteAvecId: Compte = { id: Date.now().toString(), ...newCompte };

    onAddCompte(compteAvecId);

    setNewCompte({
      clientId,
      type: "",
      solde: 0,
    });
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <Typography variant="h6" sx={{ fontFamily: "Geist Mono, monospace" }}>Ajouter un compte</Typography>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <TextField
          label="Type de compte"
          name="type"
          value={newCompte.type}
          onChange={handleInputChange}
          size="small"
        />
        <TextField
          label="Solde initial"
          type="number"
          name="solde"
          value={newCompte.solde}
          onChange={handleInputChange}
          size="small"
        />
        <Button variant="contained"  onClick={handleSubmit} sx={{backgroundColor: "#002D62" ,fontFamily: "Geist Mono, monospace" }}>
          Ajouter
        </Button>
      </div>
    </Paper>
  );
}
