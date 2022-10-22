import { useState } from 'react';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackForm } from './App.styled';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = total ? (good / total) * 100 : 0;

  const onFeedbackClick = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
    }
  };

  return (
    <FeedbackForm>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onFeedbackClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.round(positive)}
          ></Statistics>
        )}
      </Section>
    </FeedbackForm>
  );
};
