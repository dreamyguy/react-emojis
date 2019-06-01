import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import components
import Emoji from './Emoji';

// Import utils
import copyToClipboard from './../../utils/copyToClipboardUtil';

// Import styles
import './ButtonItem.scss';

class ButtonItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clipboard: '',
      copiedToClipboardStatus: false
    }
  }
  getValueToClipboard () {
    let theClipboard = '';
    const {
      copyMode = '',
      emojiObj: {
        emoji = '',
        code = '',
        id = '',
        name = '',
        nameUrl = '',
      } = {}
    } = this.props;
    if (copyMode === 'emoji') {
      theClipboard = emoji;
    }
    if (copyMode === 'code') {
      theClipboard = code;
    }
    if (copyMode === 'id') {
      theClipboard = id;
    }
    if (copyMode === 'markup') {
      theClipboard = `<span role="img" aria-label="${name}" class="react-emojis" style="line-height: 1">${emoji}</span>`;
    }
    if (copyMode === 'name') {
      theClipboard = name;
    }
    if (copyMode === 'nameUrl') {
      theClipboard = nameUrl;
    }
    if (copyMode === 'reactEmojis') {
      theClipboard = `<Emoji emoji="${nameUrl}"/>`;
    }
    return theClipboard;
  }
  render () {
    const {
      classes = '',
      emojiObj: {
        id = '',
        nameUrl = '',
      } = {},
      size = '',
    } = this.props;
    const {
      copiedToClipboardStatus,
    } = this.state;
    return (
      <button
        key={`react-emojis-docs-${id}`}
        className={`react-emojis-docs__item${classes ? ' ' + classes : ''}${copiedToClipboardStatus ? ' disabled' : ''}`}
        onClick = {() => {
          copyToClipboard(this.getValueToClipboard());
          this.setState({
            clipboard: this.getValueToClipboard(),
            copiedToClipboardStatus: true
          });
          setTimeout(() => {
            this.setState({
              copiedToClipboardStatus: false
            });
          }, 3000);
        }}
        disabled={copiedToClipboardStatus}
      >
        <div className="react-emojis-docs__item__emoji">
          <Emoji emoji={nameUrl} size={size}/>
        </div>
        <div className="react-emojis-docs__item__name">
          {copiedToClipboardStatus ? 'copied!' : nameUrl}
        </div>
      </button>
    )
  }
}

Emoji.propTypes = {
  classes: PropTypes.string,
  emojiObj: PropTypes.object,
  size: PropTypes.string,
};

export default ButtonItem;
