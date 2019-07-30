import { createSelector } from 'reselect'

const usersDataSelector = (state) => state.user

const resultSelector = createSelector(
  usersDataSelector,
  (payload) => payload.get('users')
)

export const usersSelector = (state) => ({
  users: resultSelector(state),
})
