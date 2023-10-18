import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  border-radius: 4px;
  border: 2px solid #a2b4fb;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
export const Button = styled.button`
  font-weight: bold;
  &:hover {
    background-color: #a2b4fb;
    color: white;
  }
`;
