import React, { Component } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';

// Import data
import emojis from './components/EmojiData';

// Import components
import ButtonItem from './components/ButtonItem';
import Dropdown from './components/Dropdown';
import Emoji from './components/Emoji';
import Search from './components/Search';
import Footer from './components/Footer';

// Import utils
import containsString from '../utils/containsStringUtil';

// Import styles
import './App.scss';

const options = [
  { value: 'emoji', title: 'emoji' },
  { value: 'markup', title: 'accessible emoji markup' },
  { value: 'reactEmojis', title: '"Emoji" component from "react-emojis"' },
  { value: 'nameUrl', title: 'emoji name (the reference used by "react-emojis")' },
  { value: 'name', title: 'emoji name (CLDR formatting)' },
  { value: 'code', title: 'unicode' },
  { value: 'id', title: 'id' },
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchString: '',
      copyMode: 'emoji',
      selectedCopyModeIndex: 0,
      max: false
    }
  }
  toggleViewMode () {
    const { max } = this.state;
    this.setState({
      max: !max
    })
  }
  renderViewModeButton () {
    const { max } = this.state;
    return (
      <button
        className="btn__view-mode"
        onClick={() => {
          this.toggleViewMode()
        }}
      >
        {max
          ?
          'View Comfortable Mode'
          :
          'View Condensed Mode'
        }
      </button>
    )
  }
  renderEmojiDocumentation (emojisArray, emojiSize) {
    const {
      max,
    } = this.state;
    const theEmojis = [];
    for (let e in emojisArray) {
      const {
        id = '',
        nameUrl = '',
      } = emojisArray[e];
      const {
        copyMode,
        searchString,
      } = this.state;
      if (containsString(nameUrl, searchString)) {
        theEmojis.push(
          <ButtonItem
            key={`btn-${id}`}
            emojiObj={emojisArray[e]}
            size={emojiSize}
            copyMode={copyMode}
            showMax={max}
          />
        )
      }
    }
    return theEmojis
  }
  render () {
    const {
      max,
      searchString,
      selectedCopyModeIndex,
    } = this.state;
    return (
      <>
        <div className={`app${max ? ' max' : ''}`}>
          <ForkMeOnGithub repo="https://github.com/dreamyguy/react-emojis" isPride/>
          <div className="react-emojis-docs">
            <div className="header">
              <div className="header__content">
                <h1><Emoji emoji="unicorn"/>&nbsp;&nbsp;react-emojis&nbsp;&nbsp;<Emoji emoji="party-popper"/></h1>
                {this.renderViewModeButton()}
                <h2>Render scalable emojis with proper accessibility markup</h2>
                <Search
                  placeholder="Filter emoji list"
                  value={searchString}
                  onChangeHandler={
                    (value) => {
                      this.setState({
                        searchString: value
                      })
                    }
                  }
                />
                <p>Choose what to copy to clipboard when clicking on the one you choose: <Emoji emoji="clipboard"/></p>
                <div className="dropdown-wrapper">
                  <Dropdown
                    name="chooseCopyToClipboardMode"
                    selectedvalue={selectedCopyModeIndex}
                    options={options}
                    onChange={(e) => {
                      this.setState({
                        selectedCopyModeIndex: e.target.value,
                        copyMode: options[e.target.value].value
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            {this.renderEmojiDocumentation(emojis)}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
