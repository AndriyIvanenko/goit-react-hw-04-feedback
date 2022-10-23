import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackControls>
      <FeedbackButton type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </FeedbackButton>
    </FeedbackControls>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
