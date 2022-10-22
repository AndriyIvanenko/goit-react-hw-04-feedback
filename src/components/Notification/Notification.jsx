import PropTypes from 'prop-types';
import { Span } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Span>{message}</Span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
