import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";
import herobg from "./images/more/11.png";
import { LuMoveLeft } from "react-icons/lu";
import Swal from 'sweetalert2'

const AddCoffe = () => {
  const submmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const product = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // send to backend
    fetch("http://localhost:5000/coffe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertId) {
          Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
        }
      });
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
          <div className="bg-formbg w-10/12 mx-auto rounded-md">
            <div className=" space-y-3 w-10/12 mx-auto mt-3">
              <h1 className="font-rancho py-5 text-4xl text-center">
                Add New Coffee
              </h1>
              <p className="font-raleway text-[9px] py-5 md:text-sm text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
              <form onSubmit={submmitHandler}>
                <div className="space-y-3 py-3 pb-8">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                    <label htmlFor="">
                      <span>Name</span>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Enter coffe name"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                    <label htmlFor="">
                      <span>Chef</span>
                      <input
                        required
                        type="text"
                        name="chef"
                        placeholder="Enter chef name"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                    <label htmlFor="">
                      <span>Supplier</span>
                      <input
                        required
                        type="text"
                        name="supplier"
                        placeholder="Enter supplier name"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                    <label htmlFor="">
                      <span>Taste</span>
                      <input
                        required
                        type="text"
                        name="taste"
                        placeholder="Enter coffe taste"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-between">
                    <label htmlFor="">
                      <span>Category</span>
                      <input
                        required
                        type="text"
                        name="category"
                        placeholder="Enter coffe category"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                    <label htmlFor="">
                      <span>Details</span>
                      <input
                        required
                        type="text"
                        name="details"
                        placeholder="Enter coffe details"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                  </div>

                  <div className="">
                    <label htmlFor="">
                      <span>Photo</span>
                      <input
                        required
                        type="text"
                        name="photo"
                        placeholder="Enter photoURL"
                        className="w-full px-3 h-8 rounded-md"
                        id=""
                      />
                    </label>
                  </div>

                  <div className="">
                    <label htmlFor="">
                      <input
                        required
                        type="submit"
                        className="btn bg-text bg-btnbg font-rancho border-textcl w-full"
                        value="Add Coffe"
                      />
                    </label>
                  </div>
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
