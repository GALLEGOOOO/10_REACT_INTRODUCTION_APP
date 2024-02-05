import PropTypes from 'prop-types';

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  exercise: PropTypes.number.isRequired,
};

export default Part;
