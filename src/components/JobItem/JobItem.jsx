import React from "react";
import Button from "../Button/Button";

import './JobItem.css'

export default function JobItem ({icon, inform, devName,time, payAmount}) {
    const viewWork =() => {
        location.pathname = '/view-work/0';
    }
    return (
        <div className="jobItem-form">
            <img src={'/'+icon} alt="" className="dev-icon"/>
            <div className="job-detail">
                <div className="job-inform">
                    <span>{inform}</span>
                    {
                        payAmount && (
                            <>
                                <span className="pay-amount">{payAmount}</span>
                                <img src="./xdc.png" alt="" />
                            </>
                        )
                    }
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '10px',
                    fontWeight: '700',
                    color: '#767676'
                }}>
                    <span>{devName}</span>
                    <span>.</span>
                     <span>{time + "mins ago"}</span>
                </div>
            </div>
            <Button label="View" onClick={viewWork}/>
        </div>
    )
}