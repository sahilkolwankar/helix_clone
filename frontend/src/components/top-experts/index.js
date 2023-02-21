import React, { useCallback } from 'react';

import styles from './style.module.scss';


const cardData = [
    {
        altText: 'user-icon',
        imgSource: 'userIcon',
        userName: 'Pseudo Near Expert',
        netUpvotes: 47,
    },
    {
        altText: 'user-icon',
        imgSource: 'userIcon',
        userName: 'Near Expert',
        netUpvotes: 47,
    },
    {
        altText: 'user-icon',
        imgSource: 'userIcon',
        userName: 'Bitcoin Maxi',
        netUpvotes: 47,
    },
    {
        altText: 'user-icon',
        imgSource: 'userIcon',
        userName: 'Ethereum Maxi',
        netUpvotes: 47,
    }
];

export const TopExperts = () => {

    const renderCardData = useCallback(() => cardData.map((each) => (
        <div className={`${styles.row} ${styles.cardData}`} key={each.userName}>
            <img
                className={`${styles.column} ${styles.cardIcon}`}
                src={require(`../../assets/${each.imgSource}.png`)}
                alt={each.altText}
            />
            <div className={`${styles.column} ${styles.cardTextWrapper}`}>
                <div className={`${styles.row} ${styles.userName}`}>
                    {each.userName}
                </div>
                <div className={`${styles.row} ${styles.upvotes}`}>
                    <div className={`${styles.column} ${styles.upvoteCount}`}>
                        {each.netUpvotes}
                    </div>
                    <img
                        className={`${styles.column} ${styles.netUpvoteIcon}`}
                        src={require('../../assets/netUpvoteIcon.png')}
                        alt="up-arrow"
                    />
                    <div className={styles.column}>
                        collected
                    </div>
                </div>
                {each.text}
            </div>
        </div>
    )), []);

    return (
        <div className={`${styles.cardWrapper} ${styles.topExpertsWrapper}`}>
            <div className={`${styles.column} ${styles.cardTitle}`}>
                Top Experts
            </div>
            <div className={`${styles.column} ${styles.cardDataWrapper}`}>
                {renderCardData()}
            </div>
        </div>
    );
};