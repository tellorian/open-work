import React from "react";
import { Link } from "react-router-dom";
import "./JobsTable.css";
import DropDown from "../DropDown/DropDown";
import SearchInput from "../SearchInput/SearchInput";
import BlueButton from "../BlueButton/BlueButton";

export default function JobsTable({ title, tableData, currentPage, totalPages, onPageChange, headers, titleOptions, filterOptions }) {
    const truncateAddress = (address) => {
        if (!address) return "";
        const start = address.substring(0, 6);
        const end = address.substring(address.length - 4, address.length);
        return `${start}...${end}`;
    };

    return (
        <>
            <div className="title-section">
                <div className="back">
                    <Link to="/work" className="backButton">
                        <img src="/back.svg" alt="Back" className="backIconV" />
                    </Link>
                    <div className="tableTitleV">{title}</div>
                </div>
                <div className="title-option">
                    {
                        titleOptions.map((options, index) => (
                            <DropDown label={options.title} options={options.items} />
                        ))
                    }
                </div>
            </div>
            <div className="table-section">
                <div className="filter-section">
                    <SearchInput />
                    <div className="title-option">
                    {
                        filterOptions.map((options, index) => (
                            <DropDown label={options.title} options={options.items} />
                        ))
                    }   
                    <BlueButton label="Post a Job" onClick={() => {
                        location.pathname = '/post-job'
                    }}/>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}
                                {index == 0?<img src="/arrowdown.svg" alt="" />:''}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((job) => (
                            <tr key={job.jobId}>
                                {job.map((item, i) => (
                                    <td>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    {currentPage > 1 && (
                        <button onClick={() => onPageChange(currentPage - 1)} className="page-link">
                            <img src="/back.svg" alt="Back" className="pagination-icon" />
                        </button>
                    )}
                    <div className="page-text">
                        <span style={{ color: "#868686" }}>
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>
                    {currentPage < totalPages && (
                        <button onClick={() => onPageChange(currentPage + 1)} className="page-link">
                            <img src="/front.svg" alt="Forward" className="pagination-icon" />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
