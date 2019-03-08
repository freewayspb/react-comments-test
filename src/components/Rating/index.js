import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Stars, StarsWrapper} from './style';

class Rating extends Component {

  starsRender = (rating) => {
    let stars = [];
    for(let i=0; i < rating; i++) {
      stars.push(<Stars key={i}><FontAwesomeIcon icon="star" /></Stars>);
    }
    return stars;
  };

  render() {
    const { stars } = this.props;
    return (
      <StarsWrapper>
        {this.starsRender(stars)}
      </StarsWrapper>
    );
  }
}

export default Rating;
