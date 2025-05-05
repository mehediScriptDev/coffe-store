import banner from "./images/more/1.png";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import coffecup1 from "./images/1.png";
import coffecup2 from "./images/2.png";
import coffecup3 from "./images/3.png";
import coffecup4 from "./images/4.png";
import coffecup5 from "./images/5.png";
import coffecup6 from "./images/6.png";
import { MdDelete } from "react-icons/md";

const Products = () => {
  return (
    <section
      className="min-h-screen relative mt-20 "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <p className="font-raleway text-center">--- Sip & Savor ---</p>
        <p className="text-5xl font-bold text-textcl font-rancho text-center">
          Our Popular Products
        </p>
        <div className="flex justify-center mb-7">
          <button className="btn text-white bg-btnbg border-textcl mt-3 border-2 font-raleway">
            Add coffe <GiCoffeeCup className="text-textcl" />
          </button>
        </div>
      </div>

      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-4 gap-y-4 grid-cols-1">
        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup1} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">Americano Coffee</span>
            </p>
            <p>Chef: Mr. Matin Paul</p>
            <p>Price: 890 Taka</p>
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>

        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup2} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">Black Coffee</span>
            </p>
            <p>
              <span className="font-semibold">Chef: </span>
              <span className="font-raleway">Mr.Nibra Sweden</span>
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              <span className="font-raleway">890 Taka</span>
            </p>     
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>

        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup3} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">Espresso Coffee</span>
            </p>
            <p>
              <span className="font-semibold">Chef: </span>
              <span className="font-raleway">Mrs. Morisha</span>
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              <span className="font-raleway">890 Taka</span>
            </p>
  

          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>

        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup4} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">Cappuccino Coffee</span>
            </p>
            <p>
              <span className="font-semibold">Chef: </span>
              <span className="font-raleway"> Mr. Moruti</span>
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              <span className="font-raleway">890 Taka</span>
            </p>
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>

        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup5} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway"> Macchiato</span>
            </p>
            <p>
              <span className="font-semibold">Chef: </span>
              <span className="font-raleway">Mr. Moruti</span>
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              <span className="font-raleway">890 Taka</span>
            </p>
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>

        <div className="bg-littlebg col-span-1 rounded-md px-4 flex justify-between items-center">
          <div>
            <img src={coffecup6} alt="" />
          </div>
          <div>
            <p>
              <span className="font-semibold">Name: </span>
              <span className="font-raleway">Decaf Coffee</span>
            </p>
            <p><span className="font-semibold">Chef: </span><span className="font-raleway">Mr. Moruti</span></p>
            <p><span className="font-semibold">Price: </span><span className="font-raleway">890 Taka</span></p>
          </div>
          <div className="space-y-3">
            <FaEye className="bg-eyebg text-white text-4xl rounded-md px-2" />
            <FaPen className="bg-textcl text-white text-4xl rounded-md px-2" />
            <MdDelete className="bg-red-500 text-white text-4xl rounded-md px-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
