export type Task = {
  id: string;
  title: string;
};

const TASKS: Task[] = [
  { id: '1', title: 'Fazer o Curso' },
  { id: '2', title: 'Fazer o Curso Novamente' },
];

export async function getTasks(): Promise<Task[]> {
  return Promise.resolve([...TASKS]);
}
