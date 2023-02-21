import React from 'react';
import styles from './style.module.scss';

export const Banner = () => (
    <div className={`${styles.row} ${styles.bannerWrapper}`}>
        <div className={`${styles.column} ${styles.logo}`}>
            <img src={require('../../assets/logo.png')} className={styles.logo} alt="logo" />
        </div>
        <div className={`${styles.column} ${styles.bannerTitle}`}>
            Near Protocol
        </div>
    </div>
);