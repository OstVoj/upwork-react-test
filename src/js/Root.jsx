import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import WebFont from 'webfontloader'

import I18NProvider from 'common/components/Utilities/I18NProvider'

WebFont.load({
  google: {
    families: [
      'Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
    ],
  },
})

export default class Root extends React.PureComponent {
  get content() {
    const { routes, history } = this.props

    return <Router history={history}>{routes}</Router>
  }

  render() {
    const { store } = this.props

    return (
      <I18NProvider>
        <Provider store={store}>{this.content}</Provider>
      </I18NProvider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}
