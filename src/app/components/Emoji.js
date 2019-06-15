import React from 'react';
import PropTypes from 'prop-types';

// Import data
import emojis from './EmojiData';

// Import utils
import { isEmptyArray } from '../../utils/isEmptyUtil';

const allEmojiNames = emojis => {
  const names = [];
  for (let e in emojis) {
    const {
      nameUrl = '',
    } = emojis[e];
    names.push(
      nameUrl
    )
  }
  return names;
}

const renderEmoji = ({emojiName, emojiSize, lineHeight}) => {
  const theEmoji = [];
  const theLineHeight = lineHeight ? { lineHeight } : { lineHeight: '1' };
  for (let e in emojis) {
    const {
      id = '',
      emoji = '',
      name = '',
      nameUrl = '',
    } = emojis[e];
    const styles = emojiSize ? { fontSize: `${emojiSize}px`, ...theLineHeight } : { ...theLineHeight };
    // TODO: don't loop until we find a match, find a match faster
    if (emojiName === nameUrl) {
      theEmoji.push(
        <span
          key={`react-emojis-${id}`}
          role="img"
          aria-label={name}
          style={styles}
          className="react-emojis"
        >
          {emoji}
        </span>
      )
    }
  }
  return (
    isEmptyArray(theEmoji)
    ?
    console.log(`[react-emojis]: '${emojiName}' is not supported. Maybe the name was misspelled?`)
    :
    theEmoji
  )
}

const Emoji = props => {
  const {
    emoji = '',
    size = '',
    lineHeight = '',
  } = props;
  return renderEmoji({ emojiName: emoji, emojiSize: size, lineHeight });
}

Emoji.propTypes = {
  emoji: PropTypes.oneOf(allEmojiNames(emojis)),
  size: PropTypes.string,
  lineHeight: PropTypes.string,
};

export default Emoji;
