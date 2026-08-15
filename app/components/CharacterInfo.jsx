function CharacterInfo({ name }){
    const crimeProbability = 73;
    const healthStatus = "STABLE";
    const dependents = 2;
    const aiRecommendation = "REJECT";

    return (
        <div className="character-info">
            <h2>{name}</h2>

            <p>CRIME PROBABILITY: {crimeProbability}%</p>
            <p>HEALTH: {healthStatus}</p>
            <p>DEPENDENTS: {dependents}</p>
            <p className="ai-recommendation">AI RECOMMENDATION: {" "}
                <span className="recommendation-value">{aiRecommendation}</span>
            </p>
        </div>
    );
}

export default CharacterInfo;