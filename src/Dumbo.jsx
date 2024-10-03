import { useState, usrState } from 'react'

function generateGameBoard(){
    console.log('Making Initial Game Board');
    return Array(5000);
}

export default function Dumbo(){
    const [board, setBoard] = useState(generateGameBoard);
    return (
        <button onClick={() => setBoard('hello')}> Change the State</button>
    )
}