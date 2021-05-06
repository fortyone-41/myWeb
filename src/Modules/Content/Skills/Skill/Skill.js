import React from 'react';
import SkillItem from './SkillItem/SkillItem';

const Skill = ({ item, ind, skills }) => {
    const [visible, setVisible] = React.useState("hidden")
    React.useEffect(() => {
        setTimeout(() => {
            setVisible("inline-block")
        }, 1000*ind)
    }, [])
    return (
        <div key={ind} style={{visible: visible}} className="bounce-enter-active">
            <h2>{item}</h2>
            {skills[item].map((skill, index) => (
                <SkillItem item={skill} ind={index} />
                
            ))}
        </div>
    );
}

export default Skill;
