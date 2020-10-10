import React from 'react';

function PinBlock({ isDot, counter }) {
    return (

        <span className="pin-block mx-3">
            {isDot ?
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" />
                </svg>
                :
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
            }

        </span>
    );
}

export default PinBlock;
