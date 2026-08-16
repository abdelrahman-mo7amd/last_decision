export default function DecisionButtons({ onAccept, onReject }) {
    return (
        <div className="decision-buttons">
            <button className="accept-button jersey" onClick={onAccept}>ACCEPT</button>
            <button className="reject-button jersey" onClick={onReject}>REJECT</button>
        </div>
    );
}