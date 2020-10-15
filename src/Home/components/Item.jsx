import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ContainerItem } from "styles";

import * as actions from "Home/redux/actions";
import * as selectors from "Home/redux/selectors";

const Item = ({ fetchCurrentUser, match, userInfo }) => {
  
  /**
   * Match username from react router props
   */
  const profileUsername = match.params.username;

  useEffect(() => {
    fetchCurrentUser(profileUsername);
  }, [fetchCurrentUser, profileUsername]);
  const {
    avatar_url,
    name,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio,
  } = userInfo;
  let dateFormat = new Date(created_at);
  dateFormat = dateFormat.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
  return (
    <ContainerItem>
      <div>
        <img src={avatar_url} alt={avatar_url} />
      </div>
      <div>
        <p>Public name: {name}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public created profile: {dateFormat}</p>
        <p>Company: {company || "no data"}</p>
        <p>E-mail: {email || "no data"}</p>
        <p>Location: {location}</p>
        <p>Blog: {blog}</p>
        <p>Bio: {bio || "no data"}</p>
      </div>
    </ContainerItem>
  );
};


const mapStateToProps = createStructuredSelector({
  userInfo: selectors.selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  /**
   * Pass prop to saga
   */
  fetchCurrentUser: (data) => {
    dispatch(actions.fetchCurrentUser.request(data));
  },
});

Item.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);