import React from 'react';
import { describe, test, expect, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from '../Pagination'

const mockPush = vi.fn()

vi.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: mockPush,
    }),
  }
})

describe('Pagination Component', () => {
  test('renders Prev button when applicable', () => {
    render(<Pagination currentPage={2} lastPage={3} path="/" onNavigate={() => {}} />);
    const prevButton = screen.queryByText('Prev');
    expect(prevButton).toBeInTheDocument();  // Verifica que el botón 'Prev' está en el documento si debería estar
  });

  test('click on next', async () => {
    render(<Pagination currentPage={1} lastPage={3} path="/" onNavigate={() => {}} />);
    const nextButtons = screen.getAllByText('Next');
    await userEvent.click(nextButtons[0]); // Asegúrate de clickear el botón correcto si hay múltiples
    // expect(mockPush).toBeCalledWith('/?page=2'); // Asegúrate de que esta función sea mockeada y espiada correctamente
  });
});