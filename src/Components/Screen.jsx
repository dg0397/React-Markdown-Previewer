import React from 'react';
import Header from './Header'


const Screen = ({textResult,handleClick}) => {
    return (
        <div className = "container_frame" id="container__screen" >
            <Header headerText = "Previewer" handleClick = {handleClick}/>
            <div dangerouslySetInnerHTML = {textResult} id="preview"/>
        </div>
    )
}

export default Screen;