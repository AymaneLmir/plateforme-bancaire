import { render, screen, fireEvent } from "@testing-library/react";
import Accueil from "../src/app/page";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Component", () => {
  it("affiche le rôle par défaut si non défini", () => {
    render(<Accueil />);
    expect(screen.getByText(/Rôle : Non défini/i)).toBeInTheDocument();
  });

  it("affiche le rôle administrateur si défini dans les cookies", () => {
    document.cookie = "role=administrateur";
    render(<Accueil />);
    expect(screen.getByText(/Rôle : administrateur/i)).toBeInTheDocument();
  });

  it("déclenche la déconnexion", () => {
    const mockRefresh = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ refresh: mockRefresh });

    render(<Accueil />);
    fireEvent.click(screen.getByText(/Déconnexion/i));

    expect(document.cookie).not.toContain("authenticated");
    expect(document.cookie).not.toContain("role");
    expect(mockRefresh).toHaveBeenCalled();
  });
});
