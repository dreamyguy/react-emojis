import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

// Import components
import Icon from './Icon'

// Import styles
import './Dropdown.scss'

class Dropdown extends Component {
  renderDropDown() {
    const {
      disabled = false,
      name = '',
      options = [],
      placeholder = '',
      selectedvalue = '',
    } = this.props;
    const optionsList = options.map((option, i) => {
      return (
        <option value={i} key={uuidv4()}>{option.title}</option>
      )
    })
    return (
      <select
        name={name}
        disabled={disabled}
        {...this.props}
        value={selectedvalue}
      >
        {placeholder &&
          <option value="">{placeholder}</option>
        }
        {optionsList}
      </select>
    )
  }
  render() {
    const {
      classes = '', // accepts CSS classNames as string
      size = ''
    } = this.props;
    return (
      <div className={`${size ? `dropdown--${size}` : ''}${classes ? ' ' + classes : ''}`}>
        <label className="dropdown">
          {this.renderDropDown()}
          <Icon classes="dropdown__icon" icon="chevron" size="12"/>
        </label>
      </div>
    );
  }
}

export default Dropdown;
