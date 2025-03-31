'use client';

import styles from '../../styles/MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} 모바일 청첩장</p>
      </footer>
    </div>
  );
}
