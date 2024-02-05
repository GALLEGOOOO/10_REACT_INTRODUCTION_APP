import PropTypes from 'prop-types';
import { Part } from "./Part.jsx";

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  );
}

Content.propTypes = {
  part1: PropTypes.string.isRequired,
  exercises1: PropTypes.number.isRequired,
  part2: PropTypes.string.isRequired,
  exercises2: PropTypes.number.isRequired,
  part3: PropTypes.string.isRequired,
  exercises3: PropTypes.number.isRequired,
};

export default Content;
