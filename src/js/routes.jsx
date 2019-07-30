import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const UserRouteHandler = LazyLoading(() => import('views/users'))

module.exports = (
  <div className={styles.container}>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={UserRouteHandler} />
        <Route path="*" component={UserRouteHandler} />
      </Switch>
    </div>
  </div>
)
