import React from 'react';

interface ScoreProgressProps {
    currentScore: number;
    totalQuestions: number;
}

const ScoreProgress: React.FC<ScoreProgressProps> = ({ currentScore, totalQuestions }) => {
    return (
        <div className="score-progress">
            <h2>Score: {currentScore} / {totalQuestions}</h2>
            <progress value={currentScore} max={totalQuestions}></progress>
        </div>
    );
};

export default ScoreProgress;