import styles from './Footer.module.css';
import Logo from '../../ui/Logo/Logo';
import Container from '../../ui/Container/Container';
import { navSection, helpSection } from '@/src/data/navigation';
import FooterLinks from './FooterLinks/FooterLinks';
import Newsletter from './Newsletter/Newsletter';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerContent}>

                        <div className={styles.footerLogoContent}>
                            <Logo className={styles.logoContent} />
                            <p>400 University Drive Suite 200 Coral Gables,
                                <span>FL 33134 USA</span></p>
                        </div>

                        <div className={styles.footerLinks}>
                            <FooterLinks title="Links" links={navSection} />
                            <FooterLinks title="Help" links={helpSection} />
                            <Newsletter className={styles.newsLetter} title='Newsletter' />
                        </div>
                        
                    </div>
                    <div className={styles.p}>
                        <p>2023 furino. All rights reverved</p>
                    </div>
                </div>
            </Container>
        </footer >
    )
}