function Character({ name }) {
    return (
        <div className="character" title={name}>
            <div className="character-head"></div>
            <div className="character-body"></div>
        </div>
    );
}

export default Character;