import React from 'react';
import { useHistory } from 'react-router-dom';
import { Question } from '../types';
import './QuestionScreen.css';

interface QuestionScreenProps {
    question: Question;
    questionIndex: number;
    totalQuestions: number;
    onAnswer: (isCorrect: boolean) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, questionIndex, totalQuestions, onAnswer }) => {
    const history = useHistory();

    const handleAnswer = (index: number) => {
        const isCorrect = index === question.correctAnswerIndex;
        onAnswer(isCorrect);
        if (questionIndex < totalQuestions - 1) {
            history.push(`/question/${questionIndex + 1}`);
        } else {
            history.push('/results');
        }
    };

    return (
        <div className="question-screen">
            <h2>Question {questionIndex + 1} of {totalQuestions}</h2>
            <h3>{question.question}</h3>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(index)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionScreen;