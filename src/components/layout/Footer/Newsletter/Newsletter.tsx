'use client'
import styles from './Newsletter.module.css';
import { useState } from 'react';
type NewsletterProp = {
    title: string;
    className?: string;
}

export default function Newsletter({ title, className }: NewsletterProp) {

    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className={`${styles.newsLetter}`}>
            <h3 className={styles.title}>{title}</h3>
            <form className={styles.form}>
                <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    SUBSCRIBE
                </button>
            </form>
        </div>
    )
}