import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendList/FriendListItem/FriendListItem';

import s from './FriendsList.module.css';

function FriendList({ friends }) {
  return (
    <section className={s.section}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
