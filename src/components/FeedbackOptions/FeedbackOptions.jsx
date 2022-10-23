import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <FeedbackControls>
      <FeedbackButton type="button" onClick={goodFeedback}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={neutralFeedback}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={badFeedback}>
        Bad
      </FeedbackButton>
    </FeedbackControls>
  );
};

FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func,
  neutralFeedback: PropTypes.func,
  badFeedback: PropTypes.func,
};
