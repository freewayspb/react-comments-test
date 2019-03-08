import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comments, CommentsWrapper, ShowMore } from './style';

import Index from '../Comment';
import commentsActions from '../../store/comments/action';

class CommentsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      limitToShow: 5
    }
  }

  componentDidMount() {
    const { getComments } = this.props;
    getComments();
  }

  onLoadMore = (countMore) => {
    const showMore = countMore || 5;
    this.setState({ limitToShow: this.state.limitToShow + showMore });
  };

  renderComments = (comments) => {
    const { limitToShow } = this.state;
    return comments.slice(0, limitToShow).map( comment => {
      return <Index key={comment.uuid} comment={comment} />;
    });
  };

  render() {
    const { limitToShow } = this.state;
    const { comments } = this.props;

    return (
      <CommentsWrapper>
        <Comments>
          {comments ? (
            <div>
              {this.renderComments(comments)}
              <li>
                <ShowMore
                  onClick={() => this.onLoadMore(5)}
                  disabled={limitToShow >= comments.length}
                >
                  Load more
                </ShowMore>
              </li>
            </div>
            )
          : <div>loading</div>
          }
        </Comments>
      </CommentsWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { comments } = state.comments.toJS();
  return { comments };
};

const {getComments} = commentsActions;

export default connect(mapStateToProps, {getComments})(CommentsList);
