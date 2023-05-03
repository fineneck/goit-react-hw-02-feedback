import PropTypes from 'prop-types';
import {
  Container,
  StatItem,
  Nmb,
  TotalNmb,
  TotalText,
  PositiveText,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <Container>
      <StatItem style={{ color: 'green' }}>
        Good: <Nmb> {good} </Nmb>
      </StatItem>
      <StatItem style={{ color: 'blue' }}>
        Neutral: <Nmb> {neutral} </Nmb>
      </StatItem>
      <StatItem style={{ color: 'red' }}>
        Bad: <Nmb> {bad} </Nmb>
      </StatItem>

      <StatItem>
        <TotalText>Total : </TotalText> <TotalNmb> {total} </TotalNmb>
      </StatItem>

      <PositiveText>
        <StatItem>
          Positive feedback : <Nmb> {positiveFeedback} %</Nmb>
        </StatItem>
      </PositiveText>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
