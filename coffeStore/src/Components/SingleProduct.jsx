import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SingleProduct = ({coffe}) => {
    const {_id,name,price,chef,photo} = coffe;
    return (
        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={photo} alt="coffePhoto" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">{name}</span>
            </p>
            <p>Chef:{chef}</p>
            <p>Price: {price}</p>
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>
    );
};

export default SingleProduct;