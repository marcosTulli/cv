import type { Metadata } from 'next';

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
    <html>
      <body>{children}</body>
    </html>
  );
}
