import PropTypes from 'prop-types';
import defaultImage from '../../../image/default.jpg';

import s from './FriendListItem.module.css';

function FriendListItem({
  avatar = defaultImage,
  name = 'unknown',
  isOnline = true,
}) {
  const statusClassName = isOnline ? s.isOnline : s.isOffline;
  return (
    <li className={s.item}>
      <span className={statusClassName}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
