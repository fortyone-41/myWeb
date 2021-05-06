import React from 'react';
import Skill from './Skill/Skill';
import './Skills.scss'

const Skills = (props) => {

    const skills = {
        "FrontEnd:": ["JavaScript(ES6)", "ReactJS, Redux", "SCSS", "Ant Design", "Semantic UI", "BootsTrap", "ReactStrap", "WebRTC", "Simple-Peer"],
        "BackEnd:": ["NodeJS", "Socket.IO", "PHP"],
        "Other:": ["Git/GitHub", "BEM (CSS)", "MySQL", "JSON", "ООП", "SOLID"]
    }

    React.useEffect(() => {
        return localStorage.setItem("loaded", true)
    },[])

    return (
        <div className="skills">
            <h1>{props.title}</h1>
            <div className="skills-block">
                {Object.keys(skills).map((item, index) => {
                    return (<Skill item={item} skills={skills} ind={index} />)
                }
                )}
            </div>

        </div>
    );
}

export default Skills;
