import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
`;

export const BoxInfo = styled.div`
  margin-left: 25px;
`;

export const Type = styled.span`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  :hover {
    color: purple;
  }
`;
