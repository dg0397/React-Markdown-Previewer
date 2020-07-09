import React from 'react';
import Header from './Header'


const Screen = ({textResult}) => {
    return (
        <div className = "container_frame" id="container__screen" >
            <Header headerText = "Previewer"/>
            <div dangerouslySetInnerHTML = {textResult} id="preview"/>
        </div>
    )
}

export default Screen;