import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Página inicial', () => {
test("Página inicial › renderiza as tarefas iniciais", () => {
  render(<Page />);

    expect(screen.getByText(/Minhas Tarefas/i)).toBeInTheDocument();
    expect(screen.getByText(/Fazer o Curso/i)).toBeInTheDocument();
    expect(screen.getByText(/Fazer o Curso Novamente/i)).toBeInTheDocument();
  }); 
});
