import { Map } from 'immutable';
import actions from './action';

const initState = new Map({
  comments: [],
  commentsLoading: false,
  commentsError: {}
});

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.LOAD_COMMENTS:
      return state.set('commentsLoading', true);
    case actions.LOAD_COMMENTS_SUCCESS:
      return state
        .set('comments', action.comments)
        .set('commentsLoading', false);
    case actions.LOAD_COMMENTS_ERROR:
      return state
        .set('commentsError', action.error)
        .set('commentsLoading', false);
    default:
      return state;
  }
}
