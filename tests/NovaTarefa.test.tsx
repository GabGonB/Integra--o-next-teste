import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  test('renderiza input e botão', () => {
    const fn = jest.fn();
    render(<NovaTarefa onAdd={fn} />);
    expect(screen.getByLabelText(/nova tarefa/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar/i })).toBeDisabled();
  });

  test('valida input antes de submeter', async () => {
    const user = userEvent.setup();
    const fn = jest.fn();
    render(<NovaTarefa onAdd={fn} />);

    const input = screen.getByLabelText(/nova tarefa/i);
    await user.type(input, 'ok');
    await user.click(screen.getByRole('button', { name: /adicionar/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/pelo menos 3 caracteres/i);
    expect(fn).not.toHaveBeenCalled();
  });

  test('submete quando válido e limpa o input', async () => {
    const user = userEvent.setup();
    const fn = jest.fn();
    render(<NovaTarefa onAdd={fn} />);

    const input = screen.getByLabelText(/nova tarefa/i);
    await user.type(input, 'Escrever testes');
    await user.click(screen.getByRole('button', { name: /adicionar/i }));

    expect(fn).toHaveBeenCalledWith('Escrever testes');
    expect((input as HTMLInputElement).value).toBe('');
  });
});
