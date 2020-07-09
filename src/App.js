import React, {useState} from 'react';
import Main from './Components/Main';
import marked from 'marked';
import "./Styles/styles.scss";

function App() {
  const [text,setText] = useState('');

  const handleText = e  => {
    const text = e.target.value;
    setText(text);
  }

  const getMarkdownText = () => {
    var rawMarkup = marked(text, {sanitize: true});
    return { __html: rawMarkup };
  }

  return (
    <Main 
    textContent = {text}
    handleChange = {handleText} 
    textResult = {getMarkdownText()}/>
  );
}

export default App;
