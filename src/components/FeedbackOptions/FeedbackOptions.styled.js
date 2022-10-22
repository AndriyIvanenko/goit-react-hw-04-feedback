import styled from 'styled-components';

export const FeedbackControls = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  width: 60px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;
