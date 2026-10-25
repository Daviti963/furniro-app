import styles from './NavbarGrid.module.css';
import NavbarList from "../NavbarList/NavbarList"
import { navSection } from "@/src/data/navigation"

interface NavbarGridProp {
    className: string;
    onClose: () => void
}

export default function NavbarGrid({ className, onClose }: NavbarGridProp) {
    return (
        <ul className={`${styles.ul} ${className}`}>
            {
                navSection.map(item => (
                    <NavbarList key={item.name} item={item} onClose={onClose}/>
                ))
            }
        </ul>
    )
}