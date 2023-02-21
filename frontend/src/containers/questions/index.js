import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';

export const Questions = () => {
    const dispatch = useDispatch();
    const isQuestionModalOpen = useSelector((state) => state.isQuestionModalOpen);
    const questions = useSelector((state) => state.questions);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const getQuestions = useCallback(async () => {
        let response = await fetch('http://localhost:8000/api/questions');
        let data = await response.json();
        dispatch({ type: "updateQuestions", payload: data });
    }, [dispatch]);

    useEffect(() => {
        getQuestions();
    }, [getQuestions]);

    const handleTitleChange = useCallback((event) => {
        const value = event.currentTarget.value;
        setTitle(value);
    }, []);

    const handleBodyChange = useCallback((event) => {
        const value = event.currentTarget.value;
        setBody(value);
    }, []);

    const resetForm = useCallback(() => {
        setTitle('');
        setBody('');
    }, []);

    const closeQuestionModal = useCallback(() => {
        resetForm();
        dispatch({ type: "setIsQuestionModalOpen", payload: false });
    }, [dispatch, resetForm]);

    const handleSubmit = useCallback(async () => {
        if (title.length && body.length) {
            // Make an API call here
            const response = await fetch('http://localhost:8000/api/questions/create/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    body,
                }),
            });
            
            let data = await response.json();
            
            dispatch({ type: "updateQuestions", payload: [...questions, data]})

            // Reset the form
            resetForm();
            
            // Close the modal
            closeQuestionModal();
        }
    }, [body, closeQuestionModal, dispatch, questions, resetForm, title]);

    const renderQuestionsHistory = useCallback(() => (
        <div className={styles.questionsHistory}>
            {questions.map((question) => (
                <div className={`${styles.row} ${styles.questionWrapper}`} key={question.id}>
                    <div className={`${styles.column} ${styles.questionInnerWrapper}`}>
                        <div className={`${styles.row} ${styles.questionTitle}`}>
                            {question.title}
                        </div>
                        <div className={`${styles.row} ${styles.questionBody}`}>
                            {question.body}
                        </div>
                        <div className={`${styles.column} ${styles.questionMetadata}`}>
                            <div className={`${styles.row} ${styles.askedBy}`}>
                                Asked by:
                            </div>
                            <div className={`${styles.row} ${styles.data}`}>
                                <img 
                                    className={styles.column}
                                    src={require("../../assets/userIcon.png")}
                                    alt="user-icon"
                                />
                                <div className={`${styles.column} ${styles.userMetadata}`}>
                                    <div className={`${styles.row} ${styles.name}`}>
                                        Pseudo Near Expert
                                    </div>
                                    <div className={`${styles.row} ${styles.questions}`}>
                                        2 Answers . {questions.length} Question{questions.length > 1 && 's'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ), [questions]);

    return (
        <div className={styles.questionsWrapper}>
            {isQuestionModalOpen ? (
                <div className={styles.questionModal}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            New Question
                        </div>
                        <div
                            className={styles.closeButton}
                            onClick={closeQuestionModal}
                        >
                            <img
                                className={styles.closeIcon}
                                onClick={closeQuestionModal}
                                src={require('../../assets/closeIcon.png')}
                                alt="close"
                            />
                        </div>
                    </div>
                    <div className={styles.form}>
                        <input
                            className={styles.inputField}
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Enter the question title"
                        />
                         <textarea
                            className={styles.textField}
                            value={body}
                            onChange={handleBodyChange}
                            placeholder="Write your question here"
                            
                        />
                    </div>
                    <div className={`${styles.row} ${styles.footer}`}>
                        <div className={styles.textFormat}>
                            <img
                                className={styles.textFormatIcon}
                                src={require('../../assets/textFormatIcon.png')}
                                alt="close"
                            />
                        </div>
                        <div className={styles.attachment}>
                            <img
                                className={styles.attachmentIcon}
                                src={require('../../assets/attachmentIcon.png')}
                                alt="close"
                            />
                        </div>
                        <div
                            className={`${styles.button} ${styles.submitButton}`}
                            onClick={handleSubmit}
                        >
                            Post
                        </div>
                    </div>
                </div>
            ) : renderQuestionsHistory()}
        </div>
    );
};