import { render, screen, fireEvent, act } from '@testing-library/react';
import Eventos from '../../src/pages/Eventos';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import { useEventStore } from '../../src/hooks/useEventStore';

jest.mock('../../src/api/axiosInstances', () => ({
  axiosEvento: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

jest.mock('../../src/hooks/useEventStore');

describe('Pruebas en <Eventos />', () => {
  const mockEvents = [
    {
      id: 1,
      nombre: 'Futbol',
      fechaInicio: '2024-09-10',
      fechaTermino: '2024-09-13',
      facultad: 'FAING',
    },
    {
      id: 2,
      nombre: 'Voleibol',
      fechaInicio: '2024-10-01',
      fechaTermino: '2024-10-05',
      facultad: 'FAEDU',
    },
  ];

  beforeEach(() => {
    useEventStore.mockReturnValue({
      events: mockEvents,
      startLoadingEvents: jest.fn(),
    });
  });

  test('Debe mostrar el título "Eventos"', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Eventos />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(screen.getByRole('heading', { name: /Eventos/i })).toBeTruthy();
  });

  test('Debe cambiar la facultad seleccionada', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Eventos />
          </MemoryRouter>
        </Provider>
      );
    });

    const selectElement = screen.getByLabelText(/Filtrar por Facultad/i);

    act(() => {
      fireEvent.change(selectElement, { target: { value: 'FAING' } });
    });

    expect(selectElement.value).toBe('FAING');
  });
});
