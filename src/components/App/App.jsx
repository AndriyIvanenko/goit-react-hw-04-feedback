import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import React from 'react';
import { FeedbackForm } from './App.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? (this.state.good / total) * 100 : 0;
  };

  onFeedbackClick = evt => {
    const propertyToChange = evt.target.name;
    // this.setState({ [propertyToChange]: this.state[propertyToChange] + 1 });
    this.setState(prevState => {
      return { [propertyToChange]: prevState[propertyToChange] + 1 };
    });
  };

  render() {
    return (
      <FeedbackForm>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onFeedbackClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={Math.round(
                this.countPositiveFeedbackPercentage()
              )}
            ></Statistics>
          )}
        </Section>
      </FeedbackForm>
    );
  }
}

export default Feedback;
