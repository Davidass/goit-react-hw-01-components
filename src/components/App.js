import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import Statistics from 'components/Statistics/Statistics';
import Section from './Statistics/Section/Section';

import transactions from '../data/transactions.json';
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';

import friends from '../data/friends.json';

export default function App() {
  return (
    <Container>
      {/* Task-1 */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* Task- 2*/}
      {/* <Section title="Upload stats">
        <StatisticList items={statisticalData} />
      </Section>
       */}
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>

      {/* Task- 3*/}
      <FriendList friends={friends} />
      {/* Task- 4*/}
      <TransactionHistory items={transactions} />
    </Container>
  );
}
