import { getTasks } from '@/lib/tasks';
import ListaTarefas from '@/components/ListaTarefas';

export const dynamic = 'force-static';

export default async function Page() {
  const tasks = await getTasks();
  return (
    <main>
      <ListaTarefas initialTasks={tasks} />
    </main>
  );
}
