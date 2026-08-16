export default function consequencePanel({ message, scoreChange, onNext, isLastCase }) {
    return (
        <div className="consequence-panel">
            <p className="consequence-text jersey">{message}</p>
            <p className="score-change jersey">
                {scoreChange >= 0 ? `+${scoreChange}`: scoreChange} POINTS
            </p>

            <button className="next-button jersey" onClick={onNext}>
                {isLastCase?"FINISH":"NEXT CASE"}
            </button>
        
        </div>
    );
}