export default function CharacterInfo({ name, crimeProbability, healthStatus, dependents, aiRecommendation }) {
  return (
    <div className="character-info">
      <h2>{name}</h2>

      <p>CRIME PROBABILITY: {crimeProbability}%</p>
      <p>HEALTH: {healthStatus}</p>
      <p>DEPENDENTS: {dependents}</p>

      <p className="ai-recommendation">
        AI RECOMMENDATION:{" "}
        <span className="recommendation-value">{aiRecommendation}</span>
      </p>
    </div>
  );
}
