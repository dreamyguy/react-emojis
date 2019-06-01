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
  render () {
    const {
      classes = '',
      clipboardData = '',
      emoji = '',
      id = '',
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
          copyToClipboard(clipboardData);
          this.setState({
            clipboard: clipboardData,
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
          <Emoji emoji={emoji} size={size}/>
        </div>
        <div className="react-emojis-docs__item__name">
          {copiedToClipboardStatus ? 'copied!' : emoji}
        </div>
      </button>
    )
  }
}

Emoji.propTypes = {
  classes: PropTypes.string,
  clipboardData: PropTypes.string,
  emoji: PropTypes.string.isRequired,
  id: PropTypes.string,
  size: PropTypes.string,
};

export default ButtonItem;
