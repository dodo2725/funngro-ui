import styles from './styles.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link href="/some-page">Go to Some Page</Link>
    </div>
  );
}
