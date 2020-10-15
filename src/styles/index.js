import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerItem = styled.div`
  background: #f2f2f2;
  display: grid;
  grid-template-columns: 60% 40%;
  height:100vh;
`;

export const Container = styled.div`
  background: #f2f2f2;
`;

export const RowItem = styled.li`
  border:1px solid #fff;
  list-style-type:none;
  padding:10px 20px 20px 20px;
  display:flex;
  justify-content:space-between;
  -webkit-box-shadow: 1px 1px 7px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 7px -1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 7px -1px rgba(0,0,0,0.75);
  margin-bottom:15px;
`;

export const StyledLink = styled(Link)`
  color: #41b78f;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 10px;
  }
`;

export const StyledImg = styled.img`
  width:100px;
  height:100px;
`;