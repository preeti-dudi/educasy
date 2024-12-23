import React from "react";
import { SemicirclesOnRectangle } from "../backgroundSvgs";

const CourseCurriculum = ({ modules, title = "", onSetSelected }) => {

    return (
        <div className="app-content">
            <h3 className="title center-text">Course Curriculum</h3>
            <h4 className="description center-text">{title}</h4>
            <ul className="flexbox list">
                {modules.map((module, index) => (
                    <li className="module-item" key={index}>
                        <div className="module-background clickable" onClick={() => onSetSelected(index)}>
                                <SemicirclesOnRectangle fill={`var(--color${(index % 3) + 1})`} text={module.title} textColor="var(--dark-text-color)" index={index} />
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCurriculum;
