import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import * as actions from "Home/redux/actions";
import * as selectors from "Home/redux/selectors";

import HomeItem from './HomeItem';
import { Container } from 'styles'

const Home = ({ fetchData, fetchedUsers }) => {
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <ul>
        {fetchedUsers.map((el) => (
          <HomeItem key={el.id} {...el} />
        ))}
      </ul>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  fetchedUsers: selectors.selectAllData,
});

const actionCreators = {
  fetchData: actions.fetchAllUsers.request,
};

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  getAllUsers: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, actionCreators)(Home);

