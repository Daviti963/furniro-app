'use client'
import styles from './Header.module.css';
import Logo from '../../ui/Logo/Logo';
import Container from '../../ui/Container/Container';
import Navbar from '../Navbar/Navbar';

import UserIcon from '../../ui/Icons/UserIcon';
import SearchIcon from '../../ui/Icons/SearchIcon';
import HeartIcon from '../../ui/Icons/HeartIcon';
import CartIcon from '../../ui/Icons/CartIcon';

import { useState } from 'react';

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onHandleClick = (): void => {
        setIsOpen(prev => !prev);
    }
    return (
        <header className={`${styles.header} ${isOpen ? styles.active : ''}`}>
            <Container>
                <div className={styles.headerContent}>
                    <Logo />

                    <div className={`${styles.menuWrapper} ${isOpen ? styles.active : ''}`}>
                        <Navbar className={styles.navBar} onClose={onHandleClick}/>

                        <div className={styles.iconWrapper}>
                            <UserIcon className={styles.icon} />
                            <SearchIcon className={styles.icon} />
                            <HeartIcon className={styles.icon} />
                            <CartIcon className={styles.icon} />
                        </div>
                    </div>

                    {/* Burger menu */}
                    <button className={`${styles.burger} ${isOpen ? styles.active : ''}`} onClick={onHandleClick}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </Container>
        </header>
    )
}