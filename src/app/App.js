import React from 'react';
// Import data
import emojis from './components/EmojiData';
// Import components
import Emoji from './components/Emoji';
// Import styles
import './App.scss';

const renderEmojiDocumentation = (emojisArray, emojiSize) => {
  const theEmojis = [];
  for (let e in emojisArray) {
    const {
      id = '',
      nameUrl = '',
    } = emojisArray[e];
    theEmojis.push(
      <button key={`react-emojis-docs-${id}`} className="react-emojis-docs__item">
        <div className="react-emojis-docs__item__emoji">
          <Emoji emoji={nameUrl} size={emojiSize}/>
        </div>
        <div className="react-emojis-docs__item__name">
          {nameUrl}
        </div>
      </button>
    )
  }
  return theEmojis
}

const App = () => {
  return (
    <div className="app">
        <div className="react-emojis-docs">
          {renderEmojiDocumentation(emojis)}
        </div>
    </div>
  );
}

export default App;
