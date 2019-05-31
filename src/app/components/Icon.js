import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import styles
import './Icon.scss';

const icons = [
  'address',
  'arrowDown',
  'arrow',
  'cal',
  'close',
  'download',
  'edit',
  'filter',
  'home',
  'logout',
  'notification',
  'phone',
  'post',
  'repeat',
  'search',
  'see',
  'trash',
  'burgerMenu',
  'chevron',
  'email',
  'plus',
  'secondaryMenu',
];

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {
      classes = '', // accepts CSS classNames as string
      icon = '',
      size = '',
      color = '', // white | red ('dark-charcoal' is default and doesn't require this prop)
    } = this.props;
    if (icons.indexOf(icon) !== -1) {
      const theColor = (color && (color === 'white' || color === 'red')) ? color : '';
      if (color && color !== 'white' && color !== 'red') {
        console.error(`[Icon]: You attempted to pass a color that is not supported: (${color}) to the icon: (${icon}). The only options are 'white' or 'red'. We applied the fallback/default color.`);
      }
      return (
        <div className={`icon icon__${icon}${theColor ? `--${theColor}` : ''}${classes ? ' ' + classes : ''}`} style={{ height: `${size}px`, width: `${size}px`, minWidth: `${size}px` }} />
      );
    }
    console.error(`[Icon]: You attempted to pass an icon name that is not supported: (${icon}). See 'Icon.js' line 5 for options.`);
    return null;
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.string,
};

export default Icon;
