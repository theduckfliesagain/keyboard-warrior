/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Word.scss'

export default function Word({ id, word, complete, wordRef }) {
    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(false);

    const handleInput = (e) => {
        if ((word).startsWith(e.target.value)) setInput(e.target.value)
    }

    const handleComplete = (e) => {
        if(word === input && e.code === 'Space') complete(id)
    }

    useEffect(() => {
        setCorrect(word.startsWith(input))
    }, [input])

    return (
        <div className={`Word ${correct ? 'correct' : ''}`}>
            <input type="text" value={input} onChange={handleInput} onKeyDown={handleComplete}
            style={{width: word.length + 'ch'}} tabIndex={-1} ref={wordRef}/>
            <span>{word}</span>
        </div>
    )
}
