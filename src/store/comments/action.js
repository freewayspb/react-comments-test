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

  getComments: () => ({
    type: actions.LOAD_COMMENTS
  }),
  getCommentsSuccess: (comments) => ({
    type: actions.LOAD_COMMENTS_SUCCESS,
    comments
  }),
  getCommentsError: (error) => ({
    type: actions.LOAD_COMMENTS_ERROR,
    error
  }),

};

export default actions;
