import LessonCard from "./LessonCard";
import { data } from "../data";
import "./Lesson.css";
const Lesson = () => {
  return (
    <div>
      <h1>Lesson Reminder</h1>
      <div className="main-container">
        <div className="container">
          {data.map(({ image, name, age }, id) => (
            <LessonCard key={id} image={image} name={name} age={age} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
