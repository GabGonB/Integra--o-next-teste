'use client';
import { useState, FormEvent, ChangeEvent } from 'react';

interface NovaTarefaProps {
  onAdd: (title: string) => void;
}

export default function NovaTarefa({ onAdd }: NovaTarefaProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
    if (error) setError(null);
  }

  function validate(value: string) {
    if (!value.trim()) return 'Digite um título para a tarefa.';
    if (value.trim().length < 3) return 'O título deve ter pelo menos 3 caracteres.';
    return null;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validate(title);
    if (v) {
      setError(v);
      return;
    }
    onAdd(title.trim());
    setTitle('');
  }

  const disabled = !title.trim();

  return (
    <form onSubmit={handleSubmit} aria-label="form-nova-tarefa">
      <label htmlFor="titulo">Nova tarefa</label>
      <input
        id="titulo"
        name="titulo"
        placeholder="Ex.: Ler documentação do Next.js"
        value={title}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? 'erro-titulo' : undefined}
      />
      <button type="submit" disabled={disabled}>
        Adicionar
      </button>
      {error && (
        <p role="alert" id="erro-titulo">
          {error}
        </p>
      )}
    </form>
  );
}
