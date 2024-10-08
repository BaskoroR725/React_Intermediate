import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const randEmoji = () => {
    const emojiList = ["😀", "😍", "😋", "🤨", "😒", "😣"];
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    console.log(emoji);
    return emoji;
};

    const getInitialEmoji = () => {
    return [{ id: uuidv4(), emoji: randEmoji() }];
    };

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState(getInitialEmoji);
    const addEmoji = () =>{
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuidv4(), emoji:randEmoji()}])
    };
    const deleteEmoji = (id) =>{
        setEmojis((prevEmojis) =>{
            return prevEmojis.filter((e) => e.id != id)
        });
    }
    const makeEverythingHeart = () =>{
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return{ ...e, emoji:"💙"}
            })
        });
    }
    return (
        <div>
            {emojis.map((e) => (
                <span 
                onClick={() => deleteEmoji(e.id)}
                key={e.id} 
                style={{ fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingHeart}>Make everything Hearts Emoji</button>
        </div>
    )
}