import React from 'react';

const Screen = ({textResult}) => {
    return (
    <div dangerouslySetInnerHTML = {textResult} id="preview"/>
    )
}

export default Screen;