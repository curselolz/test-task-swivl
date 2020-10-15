import React from 'react'
import PropTypes from 'prop-types'
import { RowItem, StyledLink, StyledImg } from "styles";
import { ReactComponent as ArrowIcon } from "arrow-right.svg";

const HomeItem = ({ avatar_url, login, html_url }) => {
  return (
    <RowItem>
      <div>
        <StyledImg alt={`Img from profile ${html_url}`} src={avatar_url} />
      </div>
      <div>
        <p>Public login: {login}</p>
        <p>
          Public link: <a href={html_url}>{html_url}</a>{" "}
        </p>
      </div>
      <div>
        <StyledLink to={`/item/${login}/`}>
          Open profile <ArrowIcon width="15" height="15" />{" "}
        </StyledLink>
      </div>
    </RowItem>
  );
};

HomeItem.propTypes = {
  login: PropTypes.string.isRequired,
  html_url:PropTypes.string.isRequired,
  avatar_url:PropTypes.string.isRequired
};

export default HomeItem
