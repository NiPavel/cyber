import { useState } from "react";

const Error = ({ title }) => {
  const [show, setShow] = useState(true);
  const close = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="absolute bg-red-500 text-white flex justify-between p-2 text-xl w-1/5 rounded-2xl shadow-2xl top-0 right-0 m-10">
          <span>{title}</span>
          <span
            onClick={close}
            className="hover:cursor-pointer hover:text-gray-50"
          >
            X
          </span>
        </div>
      )}
    </>
  );
};

export default Error;
