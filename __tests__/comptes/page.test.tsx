import { render, screen, fireEvent } from "@testing-library/react";
import ComptesPage from "../../src/app/comptes/page";

test("devrait afficher les comptes des clients", () => {
  render(<ComptesPage />);
  
  const clientName = screen.getByText(/Client 1 Client 1/i);
  expect(clientName).toBeInTheDocument();
});

test("devrait ajouter un nouveau compte", () => {
  render(<ComptesPage />);

  fireEvent.click(screen.getByText(/Ajouter un compte/i));
  fireEvent.change(screen.getByLabelText(/Type/i), { target: { value: "Courant" } });
  fireEvent.change(screen.getByLabelText(/Solde/i), { target: { value: "500" } });
  fireEvent.click(screen.getByText(/Ajouter/i));

  const nouveauCompte = screen.getByText(/Type: Courant/i);
  expect(nouveauCompte).toBeInTheDocument();
});
