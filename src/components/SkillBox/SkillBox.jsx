import React from "react";
import './SkillBox.css'

export default function SkillBox({title}) {
    return (
        <div className="box">
            <span>{title}</span>
        </div>
    )
}