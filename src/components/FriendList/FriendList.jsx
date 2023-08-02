import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />;
      })}
    </ul>
  );
}
