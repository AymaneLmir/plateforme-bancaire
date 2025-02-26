import { render, screen, fireEvent } from '@testing-library/react';
import TransactionsPage from '../../src/app/transactions/page';

jest.mock('../mock/mockClients', () => ({
  mockClients: [
    {
      id: '1',
      nom: 'Dupont',
      prenom: 'Jean',
      comptes: [
        { id: 'c1', type: 'Courant', solde: 100 },
        { id: 'c2', type: 'Épargne', solde: 500 },
      ],
    },
  ],
}));

describe('TransactionsPage', () => {
  test('affiche les clients et leurs comptes', () => {
    render(<TransactionsPage />);
    expect(screen.getByText(/Jean Dupont/i)).toBeInTheDocument();
    expect(screen.getByText(/Courant - Solde: 100€/i)).toBeInTheDocument();
    expect(screen.getByText(/Épargne - Solde: 500€/i)).toBeInTheDocument();
  });

  test('gère une transaction', () => {
    render(<TransactionsPage />);
    fireEvent.change(screen.getByLabelText(/Montant/i), { target: { value: 50 } });
    fireEvent.click(screen.getByText(/Déposer/i));
    expect(screen.getByText(/Courant - Solde: 150€/i)).toBeInTheDocument();
  });

  test('affiche une alerte pour fonds insuffisants', () => {
    render(<TransactionsPage />);
    fireEvent.change(screen.getByLabelText(/Montant/i), { target: { value: 200 } });
    fireEvent.click(screen.getByText(/Retirer/i));
    expect(window.alert).toHaveBeenCalledWith('Fonds insuffisants !');
  });
});
