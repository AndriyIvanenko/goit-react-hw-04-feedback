import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackControls>
      {options.map((option, index) => (
        <FeedbackButton
          type="button"
          name={option}
          key={index}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </FeedbackButton>
      ))}
    </FeedbackControls>
  );
};

FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func,
  onNeutralClick: PropTypes.func,
  onBadClick: PropTypes.func,
};
