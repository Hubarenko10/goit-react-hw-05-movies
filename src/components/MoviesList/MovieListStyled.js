import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;
export const Item = styled.li`
  display: block;
`;
export const Img = styled.img`
  margin-bottom: 5px;
  transition: background 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 5px;
  &:hover,
  &:focus {
    background: #c4c4c4;
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 500;
`;

export const Title = styled.h3`
  &:hover {
    color: orange;
  }
`;
