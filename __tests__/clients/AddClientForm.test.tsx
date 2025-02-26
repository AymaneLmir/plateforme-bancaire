import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddClientForm from '../../src/app/clients/AddClientForm';

const mockAddClient = jest.fn();
const mockEditClient = jest.fn();

const columns = [
  { id: 'nom', label: 'Nom' },
  { id: 'prenom', label: 'Prénom' },
  { id: 'email', label: 'Email' },
];

describe('AddClientForm', () => {
  test('ajoute un nouveau client', () => {
    render(<AddClientForm onAddClient={mockAddClient} onEditClient={mockEditClient} columns={columns} />);

    fireEvent.change(screen.getByLabelText(/nom/i), { target: { value: 'Dupont' } });
    fireEvent.change(screen.getByLabelText(/prénom/i), { target: { value: 'Jean' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jean.dupont@example.com' } });

    fireEvent.click(screen.getByRole('button', { name: /ajouter/i }));

    expect(mockAddClient).toHaveBeenCalledWith({
      id: expect.any(String),
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      telephone: '',
      dateNaissance: '',
      adresse: '',
      comptes: [],
    });
  });

  test('modifie un client existant', () => {
    const clientToEdit = { id: '1', nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@example.com' };

    render(<AddClientForm onAddClient={mockAddClient} onEditClient={mockEditClient} columns={columns} clientToEdit={clientToEdit} />);

    fireEvent.change(screen.getByLabelText(/nom/i), { target: { value: 'Durand' } });

    fireEvent.click(screen.getByRole('button', { name: /modifier/i }));

    expect(mockEditClient).toHaveBeenCalledWith({
      id: '1',
      nom: 'Durand',
      prenom: 'Jean',
      email: 'jean.dupont@example.com',
      telephone: '',
      dateNaissance: '',
      adresse: '',
      comptes: [],
    });
  });
});
