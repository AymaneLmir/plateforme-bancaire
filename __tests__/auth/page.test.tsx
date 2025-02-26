import { render, screen, fireEvent } from "@testing-library/react";
import AuthPage from "../../src/app/auth/page";

test("devrait afficher une erreur pour un identifiant ou mot de passe incorrect", () => {
  render(<AuthPage />);

  fireEvent.change(screen.getByLabelText(/Identifiant/i), { target: { value: "wrongUser" } });
  fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: "wrongPassword" } });
  fireEvent.click(screen.getByText(/Se connecter/i));

  expect(screen.getByText(/Nom d'utilisateur ou mot de passe incorrect/i)).toBeInTheDocument();
});

test("devrait connecter l'utilisateur avec des identifiants corrects", () => {
  render(<AuthPage />);

  fireEvent.change(screen.getByLabelText(/Identifiant/i), { target: { value: "admin" } });
  fireEvent.change(screen.getByLabelText(/Mot de passe/i), { target: { value: "admin123" } });
  fireEvent.click(screen.getByText(/Se connecter/i));

  expect(document.cookie).toContain("authenticated=true");
  expect(document.cookie).toContain("role=administrateur");
});
