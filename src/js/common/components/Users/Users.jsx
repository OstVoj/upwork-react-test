import React, { Component } from 'react';
import SVG from 'react-inlinesvg'

import CheckBox from './CheckBox'
import Switch from './Switch'
import questionMarkIcon from '../../../../assets/svg/Questionmark.svg'
import styles from './Users.css';

/**
 * @extends Component
 */

class Users extends Component {
  state = {
    selectedUserIds: [],
    selectedAll: false,
  }

  onSelectUser = (userId) => {
    let { selectedUserIds } = this.state
    if (selectedUserIds.includes(userId)) {
      selectedUserIds = selectedUserIds.filter((selectedUserId) => selectedUserId !== userId)
    } else {
      selectedUserIds.push(userId)
    }

    this.setState({
      selectedUserIds,
    })
  }

  selectAllUsers = () => {
    const { selectedAll } = this.state
    if (selectedAll) {
      this.setState({
        selectedAll: false,
        selectedUserIds: [],
      })
    } else {
      const { users } = this.props
      const selectedUserIds = users.users.map((user) => user.id)
      this.setState({
        selectedAll: true,
        selectedUserIds,
      })
    }
  }

  onChangeStatus = (userId) => {
    const { users, changeStatus } = this.props;
    const userInfos = users.users.find((user) => user.id === userId)
    if (userInfos) {
      userInfos.active = !userInfos.active
      changeStatus(userInfos)
    }
  }

  renderUsers = (users, selectedUserIds) => {
    const result = users.map((user) => (
      <tr key={user.id}>
        <td>
          <CheckBox
            checked={selectedUserIds.includes(user.id)}
            onChange={() => {}}
            onClick={() => this.onSelectUser(user.id)}
          />
        </td>
        <td>{user.type}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          <Switch
            checked={user.active}
            onChange={() => {}}
            onClick={() => this.onChangeStatus(user.id)}
          />
        </td>
      </tr>
    ))
    return result
  }

  render() {
    const { users } = this.props
    const { selectedUserIds, selectedAll } = this.state

    return (
      <div>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.userIcon} />
            <div className={styles.title}>Users</div>
          </div>
          <div className={styles.right}>
            <div className={styles.selectedCount}>{`${selectedUserIds.length} selected`}</div>
            <SVG
              src={questionMarkIcon}
              alt="question mark icon"
            />
          </div>
        </div>
        <table width="100%" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>
                <CheckBox
                  checked={selectedAll}
                  onChange={() => {}}
                  onClick={() => this.selectAllUsers()}
                />
              </th>
              <th>TYPE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>TELEPHONE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {
              users.users && this.renderUsers(users.users, selectedUserIds)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Users;
