export interface Question {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}

export type QuestionsArray = Question[];