import React, { Component } from 'react';

import { Section } from './section';
import { Container } from '../utils/container';
import { FeedbackOptions } from './feedbackOptions';
import { Statistics } from './statistics';
import { Notification } from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCountFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container column>
        <Section title="Please, leave feedback">
          <Container>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onCountFeedback}
            />
          </Container>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
