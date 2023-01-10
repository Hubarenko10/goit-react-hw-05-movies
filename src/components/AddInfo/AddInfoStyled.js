import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Cast = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: orange;
  }
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-right: 15px;
`;
export const Review = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: orange;
  }
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;
