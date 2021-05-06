import React from 'react';

const SkillItem = ({ item, ind }) => {
    const [visible, setVisible] = React.useState("none")
    React.useEffect(() => {
        if(localStorage.getItem("loaded") === "false") {
            setTimeout(() => {
                setVisible("block")
            }, 1000*(ind))
        } else {
            setVisible("block")
        } 
    }, [])
    
    return (
        
        <div  key={ind} style={{display: visible, margin: "20px"}} className="bounce-enter-active">
            <h3>{item}</h3>
        </div>
    );
}

export default SkillItem;
