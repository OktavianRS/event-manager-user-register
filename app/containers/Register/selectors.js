import { createSelector } from 'reselect';

/**
 * Direct selector to the register state domain
 */
const selectRegisterDomain = () => (state) => state.get('register');

/**
 * Other specific selectors
 */

const makeSelectErrors = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.get('errors').toJS(),
);

const makeSelectFields = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.get('fields').toJS(),
);

/**
 * Default selector used by Register
 */

const makeSelectRegister = () => createSelector(
  selectRegisterDomain(),
  (substate) => substate.toJS()
);

export {
  selectRegisterDomain,
  makeSelectErrors,
  makeSelectFields,
  makeSelectRegister,
};
