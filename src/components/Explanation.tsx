import React from 'react';

interface ExplanationProps {
    explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
    return (
        <div className="explanation-container">
            <h2>Explanation</h2>
            <p>{explanation}</p>
        </div>
    );
};

export default Explanation;