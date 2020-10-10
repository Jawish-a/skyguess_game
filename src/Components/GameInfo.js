
import React from 'react';

function GameInfo() {
    return (
        <div className="card-body p-5">
            <p className="game-subtitle pb-3">b'cuz you are a hawker <span role="img" aria-label="YES" >😎</span></p>
            <p className="game-info">Your friend forgot the PIN code of his iPhone, So he only know one IT GUY (aka developer), which is you! and your job is to figure out how to fix the printer, I'm kidding, he needs you help to find out which PIN code is the right one to unlock his iPhone</p>
            <div className="text-center pt-3">
                <button type="button" class="btn btn-outline-primary btn-game">OK, Lets Play</button>
            </div>
            <div className="text-center pt-3">
                <button type="button" class="btn btn-outline-danger btn-game">Go Back</button>
            </div>
        </div>
    );
}

export default GameInfo;
