'use client'

import styles from './NavbarList.module.css';
import Link from "next/link";
import { Navitem } from '@/src/type/navigation';
import { usePathname } from 'next/navigation';

interface NavbarListProp {
    item: Navitem
    onClose: () => void
}
export default function NavbarList({ item, onClose }: NavbarListProp) {

    const pathName = usePathname();
    const isActive = pathName === item.href;

    return (
        <li className={`${styles.li} ${isActive ? styles.active : ''}`}>
            <Link href={item.href} onClick={onClose}>{item.name}</Link>
        </li>
    )
}