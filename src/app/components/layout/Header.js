import Link from 'next/link';
import styles from './../../styles/header.module.css';
import Navbar from '../Navbar';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.deco}>
                <p>Laisse parler ton imagination, on s’occupe du reste !</p>
            </div>
            <div className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Link href="/">MON COMPTE</Link>
                </div>
                <div className={styles.headerTitle}>
                    <h1>Le Club Créatif</h1>
                </div>
                <div className={styles.headerContent}>
                    <Link href="/"> MON COMPTE</Link>
                </div>
            </div>
            <Navbar />
        </header>
    );
}
