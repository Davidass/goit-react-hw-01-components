import PropTypes from 'prop-types';

function Statistics({ label, percentage }) {
  return (
    <>
      <span className="labe">.{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Statistics;
