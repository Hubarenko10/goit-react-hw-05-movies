import styled from 'styled-components';

export const Btn = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid purple;
  background: purple;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 100%;
  border: 3px solid purple;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: grey;
  &:focus {
    color: purple;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
`;
