import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as userActions } from '../../redux/modules/user'
import { usersSelector } from '../../redux/selectors/userSelector'

const Users = LazyLoading(() => import('../../common/components/Users/Users'));

class UsersView extends Component {
  componentDidMount() {
    const { getUsers } = this.props

    getUsers()
  }

  render() {
    return (
      <Fragment>
        <Users {...this.props} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  users: usersSelector(state),
})

const mapDispatchToProps = {
  ...userActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersView)
