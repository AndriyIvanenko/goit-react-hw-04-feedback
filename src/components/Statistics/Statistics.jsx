import PropTypes from 'prop-types';
import { StatsItem, StatsItemName } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
        <span>{positivePercentage}</span>
      </StatsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
