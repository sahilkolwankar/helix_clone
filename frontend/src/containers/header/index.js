import React from 'react';

import { AskQuestion } from '../../components/ask-question';

import styles from './style.module.scss';

export const Header = () => (
    <div className={styles.appHeader}>
        <AskQuestion />
    </div>
);