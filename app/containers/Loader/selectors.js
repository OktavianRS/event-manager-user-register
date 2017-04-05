import { createSelector } from 'reselect';

/**
 * Direct selector to the loader state domain
 */
const selectLoaderDomain = () => (state) => state.get('loader');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Loader
 */

const makeSelectLoader = () => createSelector(
  selectLoaderDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLoader;
export {
  selectLoaderDomain,
};
