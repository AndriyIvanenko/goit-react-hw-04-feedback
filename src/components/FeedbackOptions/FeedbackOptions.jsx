import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return (
    <FeedbackControls>
      {optionsKeys.map((key, index) => (
        <FeedbackButton
          type="button"
          name={key}
          key={index}
          onClick={onLeaveFeedback}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
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
