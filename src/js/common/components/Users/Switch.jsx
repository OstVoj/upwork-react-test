import React, { PureComponent } from 'react';

import styles from './Switch.css';

class Switch extends PureComponent {
  render() {
    return (
      <div>
        <label htmlFor="input" {...this.props}>
          <input className={styles.switch} type="checkbox" {...this.props} />
          <div>
            <div />
          </div>
        </label>
      </div>
    );
  }
}

export default Switch
