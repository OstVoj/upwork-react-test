import React, { PureComponent } from 'react';

import styles from './CheckBox.css';

/**
 * @extends PureComponent
 */

class CheckBox extends PureComponent {
  render() {
    return (
      <label className={styles.container} htmlFor="checkbox" {...this.props}>
        <input type="checkbox" name="checkbox" {...this.props} />
        <span className={styles.checkmark} />
      </label>
    )
  }
}

export default CheckBox;
