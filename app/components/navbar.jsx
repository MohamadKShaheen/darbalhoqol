import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse justify-between h-[auto]">
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="" className="w-full h-full"/>
      </div>
      <ul className={styles.unorderedList}>
        <li className={styles.element}><Link href="/">Home</Link></li>
        <li className={styles.element}><Link href="/about">About</Link></li>
        <li className={styles.element}><Link href="/contact">Contact</Link></li>
      </ul>
      <div className={styles.header}>
        <h1 className={styles.text}>Darb Alhoqol</h1>
      </div>
    </nav>
  );
};

export default Navbar;