function GameMap({ children }) {
    return (
        <div className="game-map">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>

            <div className="moon"></div>

            <div className="building building-1">
                <div className="window window-1a"></div>
                <div className="window window-1b"></div>
                <div className="window window-1c"></div>
            </div>

            <div className="building building-2">
                <div className="window window-2a"></div>
                <div className="window window-2b"></div>
                <div className="window window-2c"></div>
                <div className="window window-2d"></div>
            </div>

            <div className="building building-3">
                <div className="window window-3a"></div>
                <div className="window window-3b"></div>
            </div>

            <div className="ground"></div>

            {children}
        </div>
    );
}

export default GameMap;