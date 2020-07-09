import React from 'react';
import Header from './Header'

const Editor = ({innerText,handleChange}) => {
    return (
        <div className = "container_frame" id="container__editor">
            <Header headerText = "Editor"/>
            <textarea name="editor" id="editor" cols="30" rows="10" value = {innerText} onChange = {handleChange}/>
        </div>
    )
}

export default Editor;