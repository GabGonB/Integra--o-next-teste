import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Página inicial', () => {
  test('renderiza as tarefas iniciais', async () => {
    const ui = await Page();
    render(ui);
    expect(screen.getByText(/Minhas Tarefas/i)).toBeInTheDocument();
    expect(screen.getByText(/Estudar Next.js 15/i)).toBeInTheDocument();
    expect(screen.getByText(/Escrever testes do formulário/i)).toBeInTheDocument();
  });
});
