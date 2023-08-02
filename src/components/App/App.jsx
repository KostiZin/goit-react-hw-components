import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { FriendList } from 'components/FriendList/FriendList';

import data from '/path/to/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory />
      <FriendList />
      <FriendListItem />
    </div>
  );
};
