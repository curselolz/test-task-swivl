import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router";
import { compose } from "recompose";

import * as actions from "Home/redux/actions";
import * as selectors from "Home/redux/selectors";

import HomeItem from './HomeItem';
import { Container } from 'styles'

const Home = ({ fetchData, getAllUsers }) => {
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <ul>
        {getAllUsers.map((el) => (
          <HomeItem key={uuidv4()} {...el} />
        ))}
      </ul>
    </Container>
  );
};

Home.propTypes = {
  getAllUsers: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  getAllUsers: selectors.selectAllData,
});

const actionCreators = {
  fetchData: actions.fetchAllUsers.request,
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  getAllUsers: PropTypes.array.isRequired,
};
const enhance = compose(withRouter, connect(mapStateToProps, actionCreators));

export default enhance(Home);

