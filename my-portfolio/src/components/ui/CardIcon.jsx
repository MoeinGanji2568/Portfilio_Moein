const CardIcon = ({ index, value }) => {
  const {} = value;
  return (
    <div key={index} className="">
      <span>{value.label}</span>
    </div>
  );
};

export default CardIcon;
