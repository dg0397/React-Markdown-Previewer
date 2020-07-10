import React from 'react';
import Editor from './Editor';
import Screen from './Screen';

function Main({textContent ,handleChange , textResult, handleClick}) {
  return (
    <div className = "container" >
      <Editor innerText = {textContent} handleChange = {handleChange} handleClick = {handleClick} />
      <Screen textResult = {textResult} handleClick = {handleClick} />
    </div>
  );
}

export default Main;
