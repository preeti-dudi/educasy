import React from 'react';
import { LinkedCard } from '../components/LinkedText';
import SearchBox from '../components/Search';
import { ENDPOINTS } from '../utils/constants';
import { SectionBackground } from '../components/Background';



const SectionHome = ({type}) => {

    const apis = { "blogs": ENDPOINTS.GET_BLOGS,
        "courses":ENDPOINTS.GET_COURSES, 
        "quizzes": ENDPOINTS.GET_QUIZZES };
    

    const list = [
        { text: "Practical AI: Hands-On Learning", path: "1" },
        { text: "Def", path: ""},
        { text: "Ghi", path: "" },
    ]
    
    return (
        <div className='course'>
            <SectionBackground />
            <div className='app-content'>
            <h1 className='title'>{ type.charAt(0).toUpperCase() + type.slice(1)}</h1>
            <SearchBox onSearch={()=>{}} />
            <div className='flexbox'>
                {list.map((link, index) => <LinkedCard key={index} link={link.path} text={link.text} />)}
            </div>

            </div>
        </div>
    );
}
export default SectionHome;