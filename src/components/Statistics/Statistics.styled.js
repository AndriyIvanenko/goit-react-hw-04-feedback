import styled from 'styled-components';

export const StatsItem = styled.li`
  width: fit-content;
  margin: auto;
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const StatsItemName = styled.span`
  display: inline-block;
  width: 90px;
`;
