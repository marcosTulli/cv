import type { Metadata } from 'next';
import '@/app/styles/_reset.scss';

export const metadata: Metadata = {
  title: 'Marcos Tulli',
  description: 'Marcos Tulli CV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
