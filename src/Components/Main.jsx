import React from 'react';
import Editor from './Editor';
import Screen from './Screen';

function Main({textContent ,handleChange , textResult}) {
  return (
    <div className = "container" >
      <Editor innerText = {textContent} handleChange = {handleChange} />
      <Screen textResult = {textResult}/>
    </div>
  );
}

export default Main;
