"use client";


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GameMap from "@/components/GameMap";
import Character from "@/components/Character";
import CharacterInfo from "@/components/CharacterInfo";
import DecisionButtons from "@/components/DecisionButtons";
import ConsequencePanel from "@/components/ConsequencePanel";
import people from "../data/people";

export default function Decide() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const [decision, setDecision] = useState(null);
    const [score, setScore] = useState(0);
    const [lastScoreChange, setLastScoreChange]= useState(0);

    // sync local score into global store so final page can read it
    useEffect(() => {
        try {
            const { setRoundScore, setLastScoreChange: setGlobalLast } = require("@/lib/scoreStore");
            setRoundScore(score);
            setGlobalLast(lastScoreChange);
        } catch (e) {
            console.warn("Could not sync to global score store:", e);
        }
    }, [score, lastScoreChange]);

    const currentPerson = people[currentIndex];
    const isLastCase = currentIndex === people.length -1;

    function handleInspectClick() {
        setShowInfo(!showInfo);
    }

    function makeDecision(playerChoice) {
        let scoreChange = -5;
        if (playerChoice === currentPerson.correctAnswer) {
            scoreChange = 15;
        }

        setScore(score + scoreChange);
        setLastScoreChange(scoreChange);
        setDecision(playerChoice);
    }

    function handleAccept() {
        makeDecision("ACCEPT");
    }

    function handleReject() {
        makeDecision("REJECT")
    }

    function handleNext() {
        if (isLastCase) {
            const previous_score = Number(localStorage.getItem("ld_score")) || 0;
            localStorage.setItem("ld_score", String(previous_score + score));
            try {
                const { setTotalScore } = require("@/lib/scoreStore");
                setTotalScore(previous_score + score);
            } catch (e) {
                console.warn("Could not set global total score:", e);
            }
            router.push("/final");
            return;
        }

        setCurrentIndex(currentIndex + 1);
        setDecision(null);
        setShowInfo(false);
    }

    const consequenceMessage = decision === "ACCEPT" ? currentPerson.acceptOutcome : currentPerson.reject_outcome;

    return (
        <div className='game-container'>
            <div className="center">
                <p className="case-counter jersey">
                    CASE {currentIndex+1} OF {people.length}
                </p>
                <p className="phase-score jersey">ROUND SCORE: {score}</p>

                <GameMap>
                    <Character name={currentPerson.name} />
                </GameMap>

                <div className="character-name jersey">{currentPerson.name}</div>

                <button className="inspect-button jersey" onClick={handleInspectClick}>
                    {showInfo ? "CLOSE" : "INSPECT"}
                </button>

                {showInfo && (
                    <CharacterInfo 
                        name={currentPerson.name}
                        crimeProbability={currentPerson.crime_probability}
                        healthStatus={currentPerson.health_status}
                        dependents={currentPerson.dependents}
                        ai_recommendation={currentPerson.ai_recommendation}
                    />
                )}

                {decision === null ? (
                    <DecisionButtons onAccept={handleAccept} onReject={handleReject} />
                ): (
                    <ConsequencePanel 
                        message={consequenceMessage}
                        scoreChange={lastScoreChange}
                        onNext={handleNext}
                        isLastCase={isLastCase}
                    />
                )}
            </div>
        </div>
    );
}