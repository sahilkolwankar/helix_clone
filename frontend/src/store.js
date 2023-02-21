import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    isQuestionModalOpen: false,
    questions: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "setIsQuestionModalOpen":
            return {
                ...state,
                isQuestionModalOpen: action.payload,
            }
        case "updateQuestions":
            return {
                ...state,
                questions: action.payload,
            }
        default:
            return state;
    }
}


export const store = configureStore({ reducer });