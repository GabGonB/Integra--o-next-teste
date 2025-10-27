'use client';
import { useMemo } from 'react';
import type { Task } from '@/lib/tasks';

export default function useContadorDeTarefas(tasks: Task[]): number {
  return useMemo(() => tasks.length, [tasks]);
}
