import { render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";

describe("ListaTarefas", () => {
  test("renderiza as tarefas iniciais", () => {
    const tarefas = [
      { id: "1", title: "Fazer o Curso" },
      { id: "2", title: "Fazer o Curso Novamente" }
    ];

    render(<ListaTarefas initialTasks={tarefas} />);

    expect(screen.getByText(/Minhas Tarefas/i)).toBeInTheDocument();
    expect(screen.getByText(/Fazer o Curso/i)).toBeInTheDocument();
    expect(screen.getByText(/Fazer o Curso Novamente/i)).toBeInTheDocument();
  });
});
