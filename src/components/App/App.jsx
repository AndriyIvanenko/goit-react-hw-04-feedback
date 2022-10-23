import { useState } from 'react';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackForm } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;
  const stats = [good, neutral, bad, total, positive];

  const changeState = evt => {
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
        return;
    }
  };

  return (
    <FeedbackForm>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={changeState}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics statistics={stats}></Statistics>
        )}
      </Section>
    </FeedbackForm>
  );
}
