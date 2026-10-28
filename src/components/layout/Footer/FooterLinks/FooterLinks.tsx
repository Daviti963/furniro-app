import Link from "next/link";
import { Navitem } from "@/src/type/navigation";
import styles from './FooterLinks.module.css';

type FooterLinksProps = {
    title: string;
    links: Navitem[];
};

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div className={styles.column}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}