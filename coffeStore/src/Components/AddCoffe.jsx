import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";
import herobg from "./images/more/11.png";
import { LuMoveLeft } from "react-icons/lu";

const AddCoffe = () => {
  const submmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffe.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const product = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
  };
  return (
    <section>
      <Header></Header>
      <div
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" min-h-screen bg-formbg py-3 px-3"
      >
        <div className="w-11/12 mx-auto relative">
          <Link to={"/"} className="flex items-center gap-2">
            <LuMoveLeft />
            <span className="text-3xl font-bold font-rancho">Back to home</span>
          </Link>
          <div className="bg-formbg w-10/12 mx-auto">
            <div className=" space-y-3 w-10/12 mx-auto mt-3">
              <h1 className="font-rancho pt-3 text-4xl text-center">
                Add New Coffee
              </h1>
              <p className="font-raleway text-sm text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
              <form>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                  <label htmlFor="">
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Enter coffe name" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                  <label htmlFor="">
                    <span>Chef</span>
                    <input type="text" name="chef" placeholder="Enter chef name" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                  <label htmlFor="">
                    <span>Supplier</span>
                    <input type="text" name="supplier" placeholder="Enter supplier name" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                  <label htmlFor="">
                    <span>Taste</span>
                    <input type="text" name="taste" placeholder="Enter coffe taste" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                  <label htmlFor="">
                    <span>Category</span>
                    <input type="text" name="category" placeholder="Enter coffe category" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                  <label htmlFor="">
                    <span>Details</span>
                    <input type="text" name="details" placeholder="Enter coffe details" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                </div>

                <div className="">
                  <label htmlFor="">
                    <span>Photo</span>
                    <input type="text" name="photo" placeholder="Enter photoURL" className="w-full px-3 h-8 rounded-md" id="" />
                  </label>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AddCoffe;
