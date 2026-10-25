import Image from "next/image";
import styles from './Logo.module.css';
export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image
                src='/images/main-logo.svg'
                alt="Company logo"
                width={50}
                height={32}
                priority
            />
            <h4>Furniro</h4>
        </div>
    );
}