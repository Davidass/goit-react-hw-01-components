import PropTypes from 'prop-types';
import defaultImage from '../../image/default.jpg';

import s from './FriendListItem.module.css';

function FriendListItem({
  avatar = defaultImage,
  name = 'unknown',
  isOnline = true,
}) {
  const statusClassName = isOnline ? `${s.isOnline}` : `${s.isOffline}`;
  return (
    <>
      <span className={statusClassName}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;