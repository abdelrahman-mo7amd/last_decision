"use client";

import Answer from "@/components/question";
import { useState } from "react";

const questions = [
    "would you kill the people protesting",
    "Will you make education free",
    "Do you like AI",
    "Should we never life imprison people",
    "Is there something that u are secretly planning",
];

export default function Question(){
    const [remaining, setRemaining] = useState(() => [...questions]);
    const [current, setCurrent] = useState(() => {
        const idx = Math.floor(Math.random() * questions.length);
        return questions[idx];
    });
    const [answers, setAnswers] = useState([]);

    function handleAnswer(answer) {
        setAnswers(prev => [...prev, { question: current, answer }]);

        // remove current from remaining
        const newRemaining = remaining.filter(q => q !== current);
        if (newRemaining.length === 0) {
            setCurrent(null);
            setRemaining([]);
            return;
        }

        const next = newRemaining[Math.floor(Math.random() * newRemaining.length)];
        setCurrent(next);
        setRemaining(newRemaining);
    }

    return (
        <div>
            <Answer question={current} onAnswer={handleAnswer} />
            <div className="mt-8 text-white">
                <h3 className="text-2xl font-bold">Recorded answers</h3>
                <ul className="mt-4">
                    {answers.map((a, i) => (
                        <li key={i} className="mb-2">{a.question? a.question:""} <strong>{a.question? a.answer:""}</strong></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}