import { render, screen, waitFor, act } from "@testing-library/react";
import Eventos from "../../src/components/Eventos";
import axios from "axios";
import { config } from "../../src/config";

jest.mock("../../src/config", () => ({
  config: {
    VITE_SERVER_EVENTO: "http://localhost:3000",
  },
}));

jest.mock("axios");

describe("Eventos Component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          nombre: "Futbol",
          fechaInicio: "2024-09-10",
          fechaTermino: "2024-09-13",
          facultad: "FAING",
        },
      ],
    });
  });

  test("debe mostrar el titulo de Juegos Florales", async () => {
    await act(async () => {
      render(<Eventos />);
    });
    const titleElement = screen.getByTestId("title");
    expect(titleElement).toBeTruthy();
  });

  test("debe mostrar el evento de futbol cuando se carga correctamente", async () => {
    await act(async () => {
      render(<Eventos />);
    });

    await waitFor(() => {
      const futbolElement = screen.getByText(/futbol/i);
      expect(futbolElement).toBeTruthy();
    });
  });

  test("debe mostrar un mensaje de error cuando falla la carga", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    await act(async () => {
      render(<Eventos />);
    });

    await waitFor(() => {
      const errorElement = screen.getByText(
        /no se pudieron cargar los eventos/i
      );
      expect(errorElement).toBeTruthy();
    });
  });
});
