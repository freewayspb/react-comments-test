import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import noAvatar from '../../assets/img/no-avatar.png';

class Author extends Component {

  render() {
    const { avatar, name, wasOnline } = this.props;
    moment.locale("de");
    return (
      <Header>
        <Avatar src={avatar && avatar.url || noAvatar} />
        <Online>{name}<br />{moment(wasOnline).fromNow()}</Online>
      </Header>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: inline-block;
  margin-right: 15px;
`;

const Online = styled.span`
    word-break: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    transition: color 0.2s ease;
    color: #686868;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 5px;
`;

export default Author;
