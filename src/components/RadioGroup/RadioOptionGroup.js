import React, { PropTypes } from 'react';
import RadioOption from '../RadioOption/RadioOption.js';

//import styles from './ContactPage.less';
//import withStyles from '../../decorators/withStyles';

//@withStyles(styles)
class RadioOptionGroup {


  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <div>
        <RadioOption><div>Test</div></RadioOption>
      </div>
	);
  }
}


export default RadioOptionGroup;

