export const Card = ({ icon, title, score }) => {
  let color = "rgba(255, 87, 86)";
  let bgColor = "rgba(255, 87, 86, 0.1)";

  if (title === "Memory") {
    color = "rgba(254, 177, 31)";
    bgColor = "rgba(254, 177, 31, 0.1)";
  } else if (title === "Verbal") {
    color = "rgba(3, 189, 145)";
    bgColor = "rgba(3, 189, 145, 0.1)";
  } else if (title === "Visual") {
    color = "rgba(17, 38, 213)";
    bgColor = "rgba(17, 38, 213, 0.1)";
  }

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
