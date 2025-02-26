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
  {
    id: "3",
    nom: "Lemoine",
    prenom: "Alice",
    email: "alice.lemoine@email.com",
    telephone: "0203040506",
    dateNaissance: "1990-09-30",
    adresse: "789 Boulevard Saint-Germain",
    comptes: [
      { id: "4", clientId: "3", type: "Courant", solde: 2000 },
      { id: "5", clientId: "3", type: "Épargne", solde: 4000 },
    ],
  },
  {
    id: "4",
    nom: "Benoit",
    prenom: "Sophie",
    email: "sophie.benoit@email.com",
    telephone: "0205060709",
    dateNaissance: "1992-12-25",
    adresse: "321 Rue de la Liberté",
    comptes: [
      { id: "6", clientId: "4", type: "Courant", solde: 2200 },
    ],
  },
];


