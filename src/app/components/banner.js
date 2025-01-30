import Image from 'next/image'; // Correct import
import Link from 'next/link';
import styles from '../styles/page.module.css';
import { IoHeart } from "react-icons/io5";
export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerContent}>
                <h1>Hey!</h1>
                <p>Notre club est un espace où chacun peut partager ses idées, expérimenter et progresser dans une ambiance conviviale.
                    Nous organisons des ateliers, des défis créatifs et des échanges pour stimuler l’inspiration et s’entraider.
                    Peu importe ton niveau, l’important est de créer et de s’amuser ensemble !
                </p>

                <p>Rejoins-nous<IoHeart /></p>
                <Link href="/" className={styles.bannerLink}>Devenir membre</Link>
            </div>

            <div className={styles.background}>

            </div>

        </section>
    );
}