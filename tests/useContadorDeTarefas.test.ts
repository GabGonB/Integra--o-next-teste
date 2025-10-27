import { renderHook } from '@testing-library/react';
import useContadorDeTarefas from '@/hooks/useContadorDeTarefas';

const mk = (n: number) => Array.from({ length: n }, (_, i) => ({ id: String(i), title: `t${i}` }));

describe('useContadorDeTarefas', () => {
  test('retorna a quantidade correta', () => {
    const { result, rerender } = renderHook(({ n }) => useContadorDeTarefas(mk(n)), {
      initialProps: { n: 0 },
    });
    expect(result.current).toBe(0);

    rerender({ n: 3 });
    expect(result.current).toBe(3);
  });
});
