import React, { useEffect, useState } from 'react';
import PinBlock from "./PinBlock";
import PinInput from "./PinInput";
import gen_picode from "./utils";

function PinCode() {
    const [pincode, setPincode] = useState("");
    const [answer, setAnswer] = useState("");
    const [isDot] = useState([false, false, false, false]);
    const [title, setTitle] = useState("Please enter the correct PIN-Code.")
    const [attempts, increaseAttempts] = useState(5)

    useEffect(() => {
        isDot[answer.length - 1] = !isDot[answer.length - 1]
        console.log(isDot)
    }, [answer])

    useEffect(() => { setPincode(gen_picode(4)); }, [])
    const showTips = () => {
        let tips = [];
        for (let i = 0; i < 9; i++) {
            tips.push(gen_picode(4));
        }
        tips.push(pincode);
        tips.sort()
        console.log(tips);
    }
    const submitAnswer = () => {
        console.log(pincode);
        console.log(answer);
        increaseAttempts(attempts-1)
        console.log(attempts)
        if (attempts === 0 ){
            console.log("YOU BRICKED THE PHONE DUM DUM")
            setTitle("YOU BRICKED THE PHONE DUM DUM")
        }
        else if (pincode == answer) {
            console.log("SMART MAN!")
            setTitle("U R A HACKER! phone unlocked")
        } else {
            setTitle(`Try again! left attempts ${(attempts)}`)
            console.log("Try again dum dum")
        }
    }

    return (
        <div className="card-body p-5">
            <div className="text-center pt-3">
                
                <h1>{title}</h1>
            </div>
            <div className="container text-center py-3">
                <div className="py-5" >
                    <PinBlock isDot={isDot[0]} />
                    <PinBlock isDot={isDot[1]} />
                    <PinBlock isDot={isDot[2]} />
                    <PinBlock isDot={isDot[3]} />
                </div>
                <PinInput answer={answer} setAnswer={setAnswer} />
            </div>
            <div className="text-center pt-3">
                <button type="button" className="btn btn-outline-info btn-game mx-3" onClick={showTips}>Show Tips</button>
                <button type="button" className="btn btn-outline-primary btn-game mx-3" onClick={submitAnswer} >Try</button>
            </div>
        </div>
    );
}

export default PinCode;
