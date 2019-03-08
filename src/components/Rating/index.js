import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Rating extends Component {

  starsRender(rating) {
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

const StarsWrapper = styled.span`
  display: inline-block;
`;

const Stars = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1.75rem;
  margin-right: 0.3rem;
  color: #27db98;
`;

export default Rating;
