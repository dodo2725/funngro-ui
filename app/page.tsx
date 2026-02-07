import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>  
        <h1>Welcome to Funngro</h1>
        <p>Your adventure starts here!</p>
      </section>
      <section className={styles.video}>  
        <h2>Watch the Video</h2>
        <video controls>
          <source src="/funngro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className={styles.skills}>  
        <h2>Our Skills</h2>
        <ul>
          <li>Creative Design</li>
          <li>Programming</li>
          <li>Marketing</li>
        </ul>
      </section>
      <section className={styles.about}>  
        <h2>About Us</h2>
        <p>At Funngro, we are committed to delivering fun and engaging experiences.</p>
      </section>
      <section className={styles.partners}>  
        <h2>Our Partners</h2>
        <ul>
          <li>Partner A</li>
          <li>Partner B</li>
          <li>Partner C</li>
        </ul>
      </section>
      <footer className={styles.footer}>  
        <p>&copy; 2026 Funngro. All rights reserved.</p>
      </footer>
    </main>
  );
}