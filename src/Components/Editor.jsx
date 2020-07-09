import React from 'react';

const Editor = ({innerText,handleChange}) => {
    return (
        <textarea name="editor" id="editor" cols="30" rows="10" value = {innerText} onChange = {handleChange}/>
    )
}

export default Editor;