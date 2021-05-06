import React from 'react';

const SkillItem = ({ item, ind }) => {
    const [visible, setVisible] = React.useState("none")
    React.useEffect(() => {
        setTimeout(() => {
            setVisible("block")
        }, 1000*(ind))
    }, [])
    return (
        <div  key={ind} style={{display: visible, margin: "20px"}} className="bounce-enter-active">
            <h3>&#128504;{item}</h3>
        </div>
    );
}

export default SkillItem;
