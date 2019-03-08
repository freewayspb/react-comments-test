import React, { Component } from 'react';
import styled from "styled-components";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Author from './Author';
import Rating from "./Rating";

class Comment extends Component{

  render() {
    moment.locale("de");
    const { comment } = this.props;
    return (
      <CommentWrapper>
        <Author
          avatar={comment.author.avatar}
          name={comment.author.name}
          wasOnline={comment.last_activity_at}
        />
        <CommentTitle>{comment.title}</CommentTitle>
        <Rating stars={comment.rating || 0} />
        <CommentBody>

          <CommentContent dangerouslySetInnerHTML={{__html: comment.body}} />
        </CommentBody>
        <CommentFooter>
          <Counter>
            <FontAwesomeIcon icon="heart" /> {comment.statistics.vote_count}
          </Counter>
          <Counter>
            <FontAwesomeIcon icon="comment" /> {comment.statistics.answer_count}
          </Counter>
          {moment(comment.created_at).fromNow()}
        </CommentFooter>
      </CommentWrapper>
    );
  }
}

const CommentBody = styled.div`
  margin: 2rem 0;
`;

const Counter = styled.span`
  margin-right: 1rem;
`;

const CommentFooter = styled.div`
  margin-top: 2rem;
  .svg-inline--fa {
    color: #cbcbcb;
  }
`;

const CommentContent = styled.div`
  color: #686868;
`;

const CommentWrapper = styled.li`
  background: #fff;
  color: #686868;
  margin: 0 30px 32px 30px;
  padding: 30px;
  font-size: 1em;
`;

const CommentTitle = styled.h3`
    color: #686868;
    margin-top: 40px;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2rem;
    margin-bottom: 10px;
    display: inline-block;
    margin-right: 2rem;
`;

export default Comment;
