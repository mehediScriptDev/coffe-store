import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UpdateCoffe from "./UpdateCoffe";

const SingleProduct = ({ coffe }) => {
  const { _id, name, price, chef, photo } = coffe;
  const navigate = useNavigate();
  const updateCoffeHanlder = () =>{
    navigate(`/updateCoffe/${_id}`)
  }
  const deleteCoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffe/${_id}`,{
            method:'delete',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
        <p>Chef: {chef}</p>
        <p>Price: {price}</p>
      </div>
      <div className="space-y-3">
        <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
        <FaPen onClick={updateCoffeHanlder} className="bg-textcl cursor-pointer text-white text-4xl rounded-md px-2" />
        <MdDelete
          onClick={() => deleteCoffee(_id)}
          className="bg-red-500 cursor-pointer btn-ghost text-white text-4xl rounded-md px-2"
        />
      </div>
    </div>
  );
};

export default SingleProduct;
