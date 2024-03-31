const Card = ({ title, onClick }) => {
  return (
    <div className="container rounded-2xl shadow-2xl p-5 bg-blue-100 text-center cursor-pointer hover:bg-blue-200" onClick={onClick}>
      {title}
    </div>
  );
};

export default Card;
