import { colors } from "../utils";

const Card = ({ icon, title, score }) => {
  const { bgColor, color } = colors[title];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex justify-between bg-opacity-10 p-4 rounded-lg"
    >
      <div className="flex gap-2">
        <img src={icon} />
        <p style={{ color: color }}>{title}</p>
      </div>
      <p className="text-secondary">
        <span className="text-dark-grey-blue">{score}</span> / 100
      </p>
    </div>
  );
};

export default Card;
