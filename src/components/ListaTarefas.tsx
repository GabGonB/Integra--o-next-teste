'use client';
import { useState } from 'react';
import NovaTarefa from '@/components/NovaTarefa';
import useContadorDeTarefas from '@/hooks/useContadorDeTarefas';
import type { Task } from '@/lib/tasks';

interface ListaTarefasProps {
  initialTasks: Task[];
}

export default function ListaTarefas({ initialTasks }: ListaTarefasProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const total = useContadorDeTarefas(tasks);

  function handleAdd(title: string) {
    const newTask: Task = { id: crypto.randomUUID(), title };
    setTasks(prev => [newTask, ...prev]);
  }

  return (
    <section>
      <h1>Minhas Tarefas</h1>
      <p aria-label="contador">Total: {total}</p>

      <NovaTarefa onAdd={handleAdd} />

      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </section>
  );
}
