import React from "react";
import { Triangle } from "../backgroundSvgs";


const ModuleBreakdown = ({ module }) => {
    return (
        <div className="app-content bg-color4half">
            <h3 className="title center-text">Module Breakdown</h3>
            <h2 className="description center-text">{module?.title}</h2>
            
            <ul className="flexbox list">
                {module?.breakdown.map((item, index) => (
                    <>
                        {index > 0 &&
                            <Triangle fill="var(--background-color)" />
                        }
                        <li key={index} className="flex1">
                            <h2 className="bg-color2 center-text">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</h2>
                            <p className="description bg-color1 box">{item.title}</p>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default ModuleBreakdown;
