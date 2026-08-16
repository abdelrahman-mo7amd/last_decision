"use client";

import { useEffect, useState } from "react";
import { getState, subscribe } from "@/lib/scoreStore";

export default function Final() {
  const [gameState, setGameState] = useState(getState());

  useEffect(() => {
    const unsubscribe = subscribe((state) => {
      setGameState(state);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="final-container text-white jersey text-4xl flex justify-center items-center flex-col">
      <h1>FINAL SCORE</h1>

      <div className="score">
        {gameState.totalScore}
      </div>

      <p>
        Summary + Questions
      </p>

      <p>
        Last score change: {gameState.lastScoreChange}
      </p>
      <p>
        Your Score was way tooo less for this you need to restart bruhhh
      </p>
      <br />
      <a href="/storyline">Restart...( You have no other option )</a>
      <div className="absolute top-0 right-0 text-black togray">
        <a href="/win" className="href">Win</a>
    </div>
    </div>
  );
}