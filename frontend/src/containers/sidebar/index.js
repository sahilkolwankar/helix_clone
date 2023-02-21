import React from 'react';

import { About } from '../../components/about';
import { TopExperts } from '../../components/top-experts';

import styles from './style.module.scss';


export const Sidebar = () => (
    <div className={`${styles.column} ${styles.sidebarWrapper}`}>
        <About />
        <TopExperts />
    </div>
);