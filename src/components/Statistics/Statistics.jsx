import PropTypes from 'prop-types';
import { StatsItem, StatsItemName } from './Statistics.styled';

export const Statistics = ({ statistics }) => {
  const [good, neutral, bad, total, positive] = statistics;
  return (
    <ul>
      <StatsItem>
        <StatsItemName>Good:</StatsItemName>
        <span>{good}</span>
      </StatsItem>
      <StatsItem>
        <StatsItemName>Neutral:</StatsItemName>
        <span>{neutral}</span>
      </StatsItem>
      <StatsItem>
        <StatsItemName>Bad:</StatsItemName>
        <span>{bad}</span>
      </StatsItem>
      <StatsItem>
        <StatsItemName>Total:</StatsItemName>
        <span>{total}</span>
      </StatsItem>
      <StatsItem>
        <StatsItemName>Positive %:</StatsItemName>
        <span>{positive}</span>
      </StatsItem>
    </ul>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.number),
};
