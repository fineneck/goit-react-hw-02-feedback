import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonFeedback
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </ButtonFeedback>
  ));
};

FeedbackOptions.prototypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
