import "./LessonCard.css";
const LessonCard = ({ image, name, age }) => {
  return (
    <div className="content">
      <img src={image} alt="img" />
      <div className="name-age">
        <h4>
          Lesson Name: <span>{name}</span>
        </h4>
        <h4>
          Lesson Hour: <span>{age}</span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default LessonCard;
