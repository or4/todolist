import PropTypes from 'prop-types';
import React, { Component } from 'react';

const Detail = ({ label, data }) => (<div><label>{label} :</label><span>{data}</span></div>);
const AccessToken = ({ token }) => (<div><label>Access token :</label><div>{token}</div></div>);

type Props = any;

export default class UserCard extends Component<Props, any> {
  static propTypes = {
    user: PropTypes.shape({
      _profile: PropTypes.object,
      _token: PropTypes.object
    }),
    logout: PropTypes.func
  }

  render() {
    const { user: { _profile, _token }, logout } = this.props;
    let expiration = 'unknown';

    if (_token.expiresAt === Infinity) {
      expiration = 'never/unknown (see provider doc)';
    } else if (_token.expiresAt) {
      const date = new Date(_token.expiresAt);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();

      if (month < 10) month = `0${month}` as any;
      if (day < 10) day = `0${day}` as any;
      if (hour < 10) hour = `0${hour}` as any;
      if (minute < 10) minute = `0${minute}` as any;

      expiration = `${month}/${day}/${year} ${hour}:${minute}`;
    }

    return (
      <div>
        <img src={_profile.profilePicURL || 'https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png'} />
        <div>
          <div>
            <div>ID {_profile.id}</div>
            <div>{_profile.name}</div>
            <Detail label="Firstname" data={_profile.firstName} />
            <Detail label="Lastname" data={_profile.lastName} />
            <Detail label="Email" data={_profile.email} />
            <Detail label="Expiration" data={expiration} />
            <AccessToken token={_token.accessToken} />
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
}
