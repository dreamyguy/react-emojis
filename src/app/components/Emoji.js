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

const renderEmoji = (emojiName, emojiSize) => {
  const theEmoji = [];
  for (let e in emojis) {
    const {
      id = '',
      emoji = '',
      name = '',
      nameUrl = '',
    } = emojis[e];
    const styles = emojiSize ? { fontSize: `${emojiSize}px`, lineHeight: '1' } : { lineHeight: '1' };
    // TODO: don't loop until we find a match, find a match faster
    if (emojiName === nameUrl) {
      theEmoji.push(
        <span
          key={`wtffoo-emoji-${id}`}
          role="img"
          aria-label={name}
          style={styles}
          className="wtfoo-emoji"
        >
          {emoji}
        </span>
      )
    }
  }
  return (
    isEmptyArray(theEmoji)
    ?
    console.log(`[Emoji]: '${emojiName}' is not supported. Maybe the name was misspelled?`)
    :
    theEmoji
  )
}

const Emoji = props => {
  const {
    emoji = '',
    size = '',
  } = props;
  return renderEmoji(emoji, size);
}

Emoji.propTypes = {
  emoji: PropTypes.oneOf(allEmojiNames(emojis)),
  size: PropTypes.string,
};

export default Emoji;
