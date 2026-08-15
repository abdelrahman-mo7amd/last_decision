"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import GameMap from "../components/GameMap";
import Character from "../components/Character";
import CharacterInfo from "../components/CharacterInfo"


export default function Start(){
    const characterName = "PERSON #1"

    const [showInfo, setShowInfo] = useState(false);

    function handleInspectClick () {
        setShowInfo(!showInfo);
    }
    return(
        <div className="game-container">
            {/* these are the three*/}
            <div className="nav">
                <h1 className="game-title jersey">THE LAST DECISION</h1>

                <div className="icon-row">
                    <Icon icon="mdi:shield-check" className="icon" title="Security"></Icon>
                    <Icon icon="mdi:robot" className="icon" title="AI System"></Icon>
                    <Icon icon="mdi:cash" className="icon" title="Economy"></Icon>
                    <Icon icon="mdi:heart-pulse" className="icon" title="Health"></Icon>
                </div>
            </div>

            {/*middle: the map and character and info*/}
            <div className="center">
                <GameMap>
                    <Character name={characterName}/>
                </GameMap>

                <div className="character-name jersey">
                    {characterName}
                </div>

                <button className="inspect-button jersey" onClick={handleInspectClick}>
                    {showInfo ? "CLOSE": "INSPECT"}
                </button>

                {showInfo && <CharacterInfo name={characterName}/>}
            </div>


            <div className="fotter">
                <p className="ai-directive jersey">CURRENT AI DIRECTIVE: MINIMIZE CRIME</p>
            </div>
        </div>
    );
}