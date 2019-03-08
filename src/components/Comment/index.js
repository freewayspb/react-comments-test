import React, { Component } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentImage, CommentBody, CommentContent, CommentFooter, CommentTitle, CommentWrapper, Counter } from './style';
import Author from '../Author';
import Rating from "../Rating";

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
          <CommentImage src={comment.attachments[0].variants.tutorial_image_square} />
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

export default Comment;
