import React from 'react';
import "./Price.css";

export default function Price({ name, amount, date }) {
    return (
        <div className='containers'>
            <div className='date'>
                <div className='month'>
                    <p>{date.split('/')[1]}</p> 
                    <p className='year'>{date.split('/')[2]}</p> 
                    <p className='datec'>{date.split('/')[0]}</p> 
                </div>
                <div className='name'>
                    <p>{name}</p> 
                </div>
            </div>
            <div className='amount'>
                <p>{amount}</p> 
            </div>
        </div>
    )
}

