import type { Metadata } from 'next';
import '@/styles/_reset.scss';
import { Providers } from './provider';
import Footer from '@/components/footer';
import Menu from '@/components/menu';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Marcos Tulli',
  description: 'Marcos Tulli CV',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <div className={styles.layoutContainer}>
            <Menu />
            <main className={styles.mainContent}>{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
