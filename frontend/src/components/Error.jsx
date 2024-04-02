const Error = ({ title }) => {
  return (
    <div className="absolute bg-red-500 text-white flex justify-between">
      <span>{title}</span>
      <span>X</span>
    </div>
  );
};

export default Error;
