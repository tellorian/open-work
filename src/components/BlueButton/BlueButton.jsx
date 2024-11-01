import React from "react";
import './BlueButton.css';

const BlueButton = ({label, onClick}) => {
    return (
        <button className="blue-button" onClick={onClick}>
            <img src="/plus.svg" alt="" />
            <span>{label}</span>
        </button>
    )
}

export default BlueButton;