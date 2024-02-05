import { Part } from "./Part.jsx";

export const Content = ({
  // part1,
  // part2,
  // part3,
  // exercises1,
  // exercises2,
  // exercises3,
  CourseData
}) => {
  return (
    <>
      {/* <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} /> */}
      <Part part={CourseData[0].part} exercise={CourseData[0].exercises} />
      <Part part={CourseData[1].part} exercise={CourseData[1].exercises} />
      <Part part={CourseData[2].part} exercise={CourseData[2].exercises} />
    </>
  );
};


