import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Comment from './Comment';

class CommentsList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      limitToShow: 5
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/comments')
      .then(res => this.setState({comments: res.data.list}))
      .catch(error => console.error(error));
  }

  onLoadMore = (countMore) => {
    const showMore = countMore || 5;
    this.setState({ limitToShow: this.state.limitToShow + showMore });
  };

  renderComments = () => {
    const { comments, limitToShow } = this.state;
    return comments.slice(0, limitToShow).map( comment => {
      return <Comment key={comment.uuid} comment={comment} />;
    });
  };

  render() {
    const { comments, limitToShow } = this.state;

    return (
      <CommentsWrapper>
        <Comments>
          {comments ? (
            <div>
              {this.renderComments()}
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

const CommentsWrapper = styled.div`
  background: #f7f7f7;
  padding: 30px 0;
  font-family: Open Sans,'Helvetica Neue', Helvetica,sans-serif;
`;

const ShowMore = styled.button`
  background: transparent;
  border: 5px solid #29db99;
  border-radius: 100%;
  font-size: 1rem;
  color: #29db99;
  cursor: pointer;
  display: block;
  width: 11rem;
  height: 11rem;
  margin: 0 auto;
  &:hover {
    background-color: #29db99;
    color: #f7f7f7;
  }
  &:focus, &:active {
    outline: none;
  }
  &:disabled {
    background-color: #f7f7f7;
    border-color: #cbcbcb;
    color: #cbcbcb;
    cursor: not-allowed;
  }
`;

const Comments = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export default CommentsList;
