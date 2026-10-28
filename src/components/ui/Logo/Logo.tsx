import Image from "next/image";
import styles from './Logo.module.css';

interface LogoProp {
    className?: string;
}

export default function Logo({className}: LogoProp) {
    return (
        <div className={`${styles.logo} ${className}`}>
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