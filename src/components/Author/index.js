import React, { Component } from 'react';
import moment from 'moment';
import noAvatar from '../../assets/img/no-avatar.png';
import { Avatar, Header, Online } from './style';

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

export default Author;
