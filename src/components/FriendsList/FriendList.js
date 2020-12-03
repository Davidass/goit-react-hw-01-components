import PropTypes from 'prop-types';

import FriendListItem from 'components/FriendsList/FriendListItem';

import s from 'components/FriendsList/FriendsList.module.css';

function FriendList({ friends }) {
  return (
    <section className={s.section}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li className={s.item} key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
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
  ),
};

export default FriendList;
