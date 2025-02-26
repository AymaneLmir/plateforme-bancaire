import { render, screen, fireEvent } from "@testing-library/react";
import AddCompteForm from "../../src/app/comptes/AddCompteForm";

test("devrait appeler onAddCompte avec un nouveau compte", () => {
  const mockOnAddCompte = jest.fn();
  render(<AddCompteForm onAddCompte={mockOnAddCompte} clientId="1" />);

  fireEvent.change(screen.getByLabelText(/Type de compte/i), { target: { value: "Courant" } });
  fireEvent.change(screen.getByLabelText(/Solde initial/i), { target: { value: "500" } });
  fireEvent.click(screen.getByText(/Ajouter/i));

  expect(mockOnAddCompte).toHaveBeenCalledWith({
    id: expect.any(String),
    clientId: "1",
    type: "Courant",
    solde: 500,
  });
});
