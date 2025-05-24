import banner from "./images/more/1.png";

import { GiCoffeeCup } from "react-icons/gi";
import coffecup1 from "./images/1.png";
import coffecup2 from "./images/2.png";
import coffecup3 from "./images/3.png";
import coffecup4 from "./images/4.png";
import coffecup5 from "./images/5.png";
import coffecup6 from "./images/6.png";

import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const coffees = useLoaderData();
  return (
    <section
      className=" relative mt-20 pb-10"
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
        <div className="flex justify-center gap-1 mb-7">
          <Link to={'/addCofee'} className="btn text-white bg-btnbg border-textcl mt-3 border-2 font-raleway">
            Add coffe <GiCoffeeCup className="text-textcl" />
          </Link>
          
        </div>
      </div>

      {/* images    link
      
      https://i.ibb.co/Z6QzLfTq/1.png
      https://i.ibb.co/xSL8N0NV/2.png
      https://i.ibb.co/fYy6Kd8S/3.png
      https://i.ibb.co/JRpFZ11S/4.png
      https://i.ibb.co/bMd5RLx0/5.png
      https://i.ibb.co/xSFTb0x1/6.png
      */}

      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-4 gap-y-4 grid-cols-1">
        

       
          {coffees.map(coffe=> <SingleProduct key={coffe._id} coffe={coffe}></SingleProduct>)}
        
      </div>
    </section>
  );
};

export default Products;
