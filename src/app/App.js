import React, { Component } from 'react';

// Import data
import emojis from './components/EmojiData';

// Import components
import ButtonItem from './components/ButtonItem';
import Emoji from './components/Emoji';
import Search from './components/Search';

// Import utils
import containsString from '../utils/containsStringUtil';

// Import styles
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }
  renderEmojiDocumentation = (emojisArray, emojiSize) => {
    const theEmojis = [];
    for (let e in emojisArray) {
      const {
        id = '',
        nameUrl = '',
        emoji = '',
      } = emojisArray[e];
      const {
        searchString
      } = this.state;
      if (containsString(nameUrl, searchString)) {
        theEmojis.push(
          <ButtonItem
            key={`btn-${id}`}
            id={id}
            emoji={nameUrl}
            size={emojiSize}
            clipboardData={emoji}
          />
        )
      }
    }
    return theEmojis
  }
  render () {
    return (
      <div className="app">
        <div className="react-emojis-docs">
          <div className="header">
            <div className="header__content">
              <h1>react-emojis</h1>
              <Emoji emoji="rocket"/>
              <Emoji emoji="hamster"/>
              <Emoji emoji="party-popper"/>
              <h2>Render scalable emojis with proper accessibility markup</h2>
              <Search
                placeholder="Filter emoji list"
                value={this.state.searchString}
                onChangeHandler={
                  (value) => {
                    this.setState({
                      searchString: value
                    })
                  }
                }
              />
              <p>Copy emoji to clipboard by clicking on the one you choose! <Emoji emoji="clipboard"/></p>
            </div>
          </div>
          {this.renderEmojiDocumentation(emojis)}
        </div>
      </div>
    );
  }
}

export default App;
