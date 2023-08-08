import React, { useState, useEffect } from 'react';
import './Word.css';

const Word = () => {
    const [text, setText] = useState('');
    const [wordC, setWord] = useState(0);
    const [timeR, setTime] = useState(null);

    useEffect(() => {
        if (timeR) {
            clearTimeout(timeR);
        }
        const newTime = setTimeout(() => {
            const words = text.split(/\s+/).filter(word => word !== '');
            const count = words.length;
            setWord(count);
        }, 500);

        setTime(newTime);
    }, [text]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className='container'>
            <textarea
                rows={5}
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text..."
            />
            <p>Word(s): {wordC}</p>
        </div>
    );
};

export default Word;
