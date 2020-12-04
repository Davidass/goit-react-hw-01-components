import PropTypes from 'prop-types';
import Section from './Section/Section';

import s from './StatisticListItem/StatisticList.module.css';

import StatisticListItem from './StatisticListItem/StatisticListItem';

function Statistics({ title, stats }) {
  return (
    <Section title="Upload stats">
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.statistics} key={stats.id}>
        {stats.map(stat => (
          <StatisticListItem label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
