import PropTypes from 'prop-types';
import s from './StatisticList.module.css';

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

function StatisticListItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomColor() }}>
      <span className="labe">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticListItem;
