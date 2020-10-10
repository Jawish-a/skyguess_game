import React from 'react';
import PinCode from "./PinCode";
import GameInfo from "./GameInfo";

function GameBase() {
    return (
        <div className="game-container">
            <div className="container my-5">
                <div className="card game-card shadow-lg" >
                    <div className="card-header">
                        <h1 className="text-muted">Game Title</h1>
                    </div>
                    {/* <GameInfo /> */}
                    <PinCode />
                    <div className="card-footer">
                        <p>Score: 100   </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameBase;
