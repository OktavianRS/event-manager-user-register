
import { fromJS } from 'immutable';
import loaderReducer from '../reducer';

describe('loaderReducer', () => {
  it('returns the initial state', () => {
    expect(loaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
