import React, {useState} from 'react';
import Main from './Components/Main';
import marked from 'marked';
import "./Styles/styles.scss";
import {data} from "./data";


function App() {
  const [text,setText] = useState(data);

  const handleText = e  => {
    const text = e.target.value;
    setText(text);
  }

  const expandScreen = (e) => {
    const node = e.target.parentNode.parentNode 
    node.classList.toggle('active')
  }

  const getMarkdownText = () => {
    const objConfig = {
      sanatize:true,
      breaks : true,
      gfm : true
    }
    var rawMarkup = marked(text, objConfig);
    return { __html: rawMarkup };
  }

  return (
    <Main 
    textContent = {text}
    handleChange = {handleText} 
    textResult = {getMarkdownText()}
    handleClick = {expandScreen}/>
  );
}

export default App;
