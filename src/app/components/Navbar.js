import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link href="/"> GALERIE</Link></li>
                <li><Link href="/"> MEMBRES</Link></li>
                <li><Link href="/"> PLANNING</Link></li>
                <li><Link href="/"> ATELIER</Link></li>
            </ul>
        </nav>
    );
}