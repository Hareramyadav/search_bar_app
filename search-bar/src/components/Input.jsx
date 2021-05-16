import React from 'react';
import './Input.css'

export const Input = (props)=>(
    <div className="container">
        <input type="text" className="input" placeholder="Search........." onChange={props.onChange}/>
    </div>
)