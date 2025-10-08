import React, { useState } from 'react';
import QuestionScreen from './components/QuestionScreen';
import ScoreProgress from './components/ScoreProgress';
import Explanation from './components/Explanation';
import questions from './data/questions';

const App: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        setShowExplanation(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-app">
            <ScoreProgress score={score} totalQuestions={questions.length} />
            {showExplanation ? (
                <Explanation explanation={currentQuestion.explanation} onNext={handleNextQuestion} />
            ) : (
                <QuestionScreen
                    question={currentQuestion}
                    questionIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
};

export default App;