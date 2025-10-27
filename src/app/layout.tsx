import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Lista de Tarefas',
  description: 'Projeto exemplo com testes',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
