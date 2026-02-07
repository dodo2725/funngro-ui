'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Funngro</span>
        </Link>
        
        <div className={styles.navLinks}>
          <Link 
            href="/contact" 
            className={styles.navLink}
          >
            Contact
          </Link>
          <Link 
            href="/download" 
            className={styles.navLink}
          >
            Download
          </Link>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/teen" 
            className={`${styles.navLink} ${pathname === '/teen' ? styles.active : ''}`}
          >
            Teen
          </Link>
          <Link 
            href="/company" 
            className={`${styles.navLink} ${pathname === '/company' ? styles.active : ''}`}
          >
            Company
          </Link>
        </div>
      </div>
    </nav>
  );
}

