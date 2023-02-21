import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './style.module.scss';


export const AskQuestion = () => {
    const dispatch = useDispatch();
    const isQuestionModalOpen = useSelector((state) => state.isQuestionModalOpen);

    const handleClick = useCallback(() => {
        if (!isQuestionModalOpen) {
            dispatch({ type: "setIsQuestionModalOpen", payload: true});
        }
    }, [dispatch, isQuestionModalOpen]);

    return (
        <div className={styles.containerWrapper}>
            <div className={`${styles.button} ${styles.askQuestionButton}`} onClick={handleClick}>
                Ask a question
            </div>
        </div>
    );
};