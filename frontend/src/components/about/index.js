import React, { useCallback } from 'react';

import styles from './style.module.scss';

const cardData = [
    {
        altText: 'experts',
        className: 'height-20',
        imgSource: 'experts',
        text: '246 Experts',
    },
    {
        altText: 'qna',
        className: 'height-18',
        imgSource: 'qna',
        text: '199k Questions and Answers',
    },
    {
        altText: 'upvotes',
        className: 'height-20',
        imgSource: 'upvotes',
        text: '246 Experts',
    },
    {
        altText: 'tokens',
        className: 'height-24',
        imgSource: 'tokens',
        text: '145 Tokens Awarded',
    }
];

export const About = () => {

    const renderCardData = useCallback(() => cardData.map((each) => (
        <div className={`${styles.row} ${styles.cardData}`} key={each.imgSource}>
            <img
                className={`${styles.column} ${styles.cardIcon} ${styles[each.className]}`}
                src={require(`../../assets/${each.imgSource}.png`)}
                alt={each.altText}
            />
            <div className={`${styles.column} ${styles.cardText}`}>
                {each.text}
            </div>
        </div>
    )), []);

    return (
        <div className={`${styles.cardWrapper} ${styles.aboutWrapper}`}>
            <div className={`${styles.column} ${styles.cardTitle}`}>
                About
            </div>
            <div className={`${styles.column} ${styles.cardDataWrapper}`}>
                {renderCardData()}
            </div>
        </div>
    );
};