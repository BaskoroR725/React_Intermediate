import { useState } from "react";
export default function ScoreKeeperPlus({numPlayer = 4, target = 5}){
    const [ scores, setScores ] = useState(new Array(numPlayer).fill(0));
    /* const incrementScore = (idx) =>{
        setScores((prevScores) => {
            const copy = [...prevScores];
            copy[idx] +=1;
            return copy;
        });
    }  */
    const incrementScore = (idx) =>{
        setScores((prevScore) => {
            return prevScore.map((score, i) =>{
                if (i === idx) return score + 1;
                return score;
            })
        })
    }
    const reset = () =>{
        setScores(new Array(numPlayer).fill(0))
    }
    return (
        <div>
            <h1> Score </h1>
            <ul>
                {scores.map((score, idx) =>{
                    return <li key={idx} >
                        Player{ idx + 1 } : {score}
                        <button onClick={() => incrementScore(idx)}> + 1 </button>
                        {score >= target && "Winner" }
                        </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}