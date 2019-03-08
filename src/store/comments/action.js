import axios from 'axios';

const actions = {
  /*
   * action types
   */

  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_COMMENTS_SUCCESS: 'LOAD_COMMENTS_SUCCESS',
  LOAD_COMMENTS_ERROR: 'LOAD_COMMENTS_ERROR',

  /*
   * action creators
   */

  getComments: (dispatch) => {
    axios.get('http://localhost:3000/comments')
      .then((res) => dispatch({type: actions.LOAD_COMMENTS_SUCCESS, payload: res}))
      .catch((error) => dispatch({type: actions.LOAD_COMMENTS_ERROR, payload: error}));
  },

};

export default actions;
