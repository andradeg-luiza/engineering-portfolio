import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luiza Andrade — Engineering Portfolio',
  description: 'Software Engineer with a quality-first mindset (SDET).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
          <nav style={{ display: 'flex', gap: '12px' }}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/projects/focusflow">FocusFlow</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: '16px' }}>{children}</main>
      </body>
    </html>
  );
}
