/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './RadioOptionGroup.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class RadioOptionGroup {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'RadioOptionGroup Us';
    this.context.onSetTitle(title);
    return (
      <div className="RadioOptionGroup">
        <div className="RadioOptionGroup-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default RadioOptionGroup;
