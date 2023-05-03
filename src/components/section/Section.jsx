import PropTypes from 'prop-types';
import { Container } from 'utils/container';

export const Section = ({ title, children }) => {
  return (
    <Container column>
      {title && <h1>{title}</h1>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
