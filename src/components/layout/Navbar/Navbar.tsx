import styles from './Navbar.module.css';
import NavbarGrid from './NavbarGrid/NavbarGrid';

interface NavbarProp {
    className: string;
    onClose: () => void
}

export default function Navbar({ className, onClose }: NavbarProp) {
    return (
        <nav className={`${styles.navbar} ${className}`}>
            <NavbarGrid className={styles.navbarGrid} onClose={onClose}/>
        </nav>
    )
} 