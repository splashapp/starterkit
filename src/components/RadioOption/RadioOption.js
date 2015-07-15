import React, { PropTypes } from 'react';
//import styles from './ContactPage.less';
//import withStyles from '../../decorators/withStyles';

//@withStyles(styles)

class RadioOption {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
			<p className="radio">
				<label>
				</label>
			</p>
    );
  }
}

export default RadioOption;
