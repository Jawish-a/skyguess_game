import React from 'react';

function PinInput({ answer, setAnswer }) {

    const handChange = (event) => {
        if (event.target.value.length > 4) {
            event.target.value.slice(0, 4)
        }
        setAnswer(event.target.value.slice(0, 4));
    }
    return (
        <div className="py-5 mx-auto" >
            <input type="number" value={answer} onChange={handChange} className="pin-input mx-auto form-control" placeholder="****" />
        </div>);
}

export default PinInput;
