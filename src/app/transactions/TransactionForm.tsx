import { useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

type TransactionFormProps = {
  clientId: string;
  compteId: string;
  handleTransaction: (clientId: string, compteId: string, montant: number, type: "depot" | "retrait") => void;
};

export default function TransactionForm({ clientId, compteId, handleTransaction }: TransactionFormProps) {
  const [montant, setMontant] = useState<number>(0);
  const [type, setType] = useState<"depot" | "retrait">("depot");

  const handleSubmit = () => {
    if (montant <= 0) {
      alert("Le montant doit être positif.");
      return;
    }

    handleTransaction(clientId, compteId, montant, type);
    setMontant(0); 
  };

  return (
    <Paper style={{ padding: "20px", marginTop: "10px" }}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Type de transaction</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as "depot" | "retrait")}
              label="Type de transaction"
            >
              <MenuItem value="depot">Dépôt</MenuItem>
              <MenuItem value="retrait">Retrait</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Montant"
            type="number"
            value={montant}
            onChange={(e) => setMontant(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        
        

        <Grid item xs={12}>
          <Button variant="contained"sx={{ fontFamily: "Geist Mono, monospace", backgroundColor: "#002D62"}} onClick={handleSubmit}>
            Effectuer la Transaction
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
