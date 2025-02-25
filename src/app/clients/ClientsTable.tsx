import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

type Client = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  adresse: string;
};

type ClientsTableProps = {
  clients: Client[];
  columns: { id: keyof Client; label: string }[];
  onEditClient: (client: Client) => void;
  onDeleteClient: (clientId: string) => void;
};

export default function ClientsTable({ clients, columns, onEditClient, onDeleteClient }: ClientsTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell>Actions</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>{client[column.id]}</TableCell>
              ))}
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onEditClient(client)} 
                >
                  Modifier
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDeleteClient(client.id)} 
                  style={{ marginLeft: "10px" }}
                >
                  Supprimer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
