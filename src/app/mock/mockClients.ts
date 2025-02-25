export const mockClients = [
    {
      id: "1",
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@email.com",
      telephone: "0102030405",
      dateNaissance: "1980-01-01",
      adresse: "123 Rue de Paris",
      comptes: [
        { id: "1", clientId: "1", type: "Courant", solde: 1500 },
        { id: "2", clientId: "1", type: "Épargne", solde: 3000 },
      ],
    },
    {
      id: "2",
      nom: "Martin",
      prenom: "Paul",
      email: "paul.martin@email.com",
      telephone: "0105060708",
      dateNaissance: "1985-05-15",
      adresse: "456 Avenue des Champs",
      comptes: [
        { id: "3", clientId: "2", type: "Courant", solde: 1200 },
      ],
    },
  ];
  