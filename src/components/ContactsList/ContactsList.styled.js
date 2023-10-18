import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  margin-left: 20px;
  flex-wrap: wrap;
`;
export const Contact = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  border: 1px solid #a2b4fb;
  padding: 8px;
  border-radius: 4px;
`;
export const ListItem = styled.li`
  font-size: 1em;
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  height: 17px;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  border-radius: 4px;
  border: 1px solid #a2b4fb;
  margin-left: auto;
  padding: 10px;

  &:hover {
    background-color: #a2b4fb;
    color: white;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
`;
export const Contacts = styled.div`
  display: flex;
  margin-top: 20px;
`;
