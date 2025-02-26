import { render, screen, fireEvent } from "@testing-library/react";
import TransactionForm from "../../src/app/transactions/TransactionForm";

test("devrait effectuer un dépôt", () => {
  const mockHandleTransaction = jest.fn();
  render(<TransactionForm clientId="1" compteId="1" handleTransaction={mockHandleTransaction} />);
  
  fireEvent.change(screen.getByLabelText(/Montant/i), { target: { value: "100" } });
  fireEvent.click(screen.getByText(/Effectuer la Transaction/i));

  expect(mockHandleTransaction).toHaveBeenCalledWith("1", "1", 100, "depot");
});

test("devrait effectuer un retrait", () => {
  const mockHandleTransaction = jest.fn();
  render(<TransactionForm clientId="1" compteId="1" handleTransaction={mockHandleTransaction} />);
  
  fireEvent.change(screen.getByLabelText(/Montant/i), { target: { value: "50" } });
  fireEvent.change(screen.getByLabelText(/Type de transaction/i), { target: { value: "retrait" } });
  fireEvent.click(screen.getByText(/Effectuer la Transaction/i));

  expect(mockHandleTransaction).toHaveBeenCalledWith("1", "1", 50, "retrait");
});
