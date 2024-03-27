const Card = ({ title }) => {
  return (
    <div className="container rounded-2xl shadow-2xl p-5 bg-blue-100 text-center cursor-pointer hover:bg-blue-200">
      {title}
    </div>
  );
};

export default Card;
