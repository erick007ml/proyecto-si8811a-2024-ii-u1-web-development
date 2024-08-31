import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import Eventos from '../../src/components/Eventos';

jest.mock('axios');

describe('Eventos Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, nombre: 'Futbol', fechaInicio: '2024-09-10', fechaTermino: '2024-09-13', facultad: 'FAING' }
      ]
    });
  });

  test('debe mostrar el inicio de cargando', async () => {
    render(<Eventos />);
    expect(screen.getByText("Cargando eventos...")).toBeTruthy();
  });

  test('debe mostrar el evento de futbol cuando se carga correctamente', async () => {
    render(<Eventos />);

    await waitFor(() => {
      const futbolElement = screen.getByText(/futbol/i);
      expect(futbolElement).toBeTruthy();
    });
  });

  test('debe mostrar un mensaje de error cuando falla la carga', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));
    render(<Eventos />);

    await waitFor(() => {
      const errorElement = screen.getByText(/no se pudieron cargar los eventos/i);
      expect(errorElement).toBeTruthy();
      expect(screen.getByText("No se pudieron cargar los eventos")).toBeTruthy();

      
    });
  });
});
