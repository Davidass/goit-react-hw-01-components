import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './StatisticList.module.css';

function getRandomColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

function StatisticList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <li
          className={s.item}
          key={item.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticList;
