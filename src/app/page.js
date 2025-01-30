
import Image from 'next/image'; // Correct import
import Link from 'next/link';
import styles from './styles/page.module.css';
import Banner from './components/banner';


export default function Home() {
    return (
        <div>
            <Banner />
        </div>
    );
}
