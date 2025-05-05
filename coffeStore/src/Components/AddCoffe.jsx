import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";
import herobg from "./images/more/1.png";
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
    <section >
      <Header></Header>
      <div
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className=" min-h-screen bg-formbg py-3 px-3"
      >
        <div className="w-11/12 mx-auto relative">
        <Link to={'/'} className="flex items-center gap-2"><LuMoveLeft /><span className="text-3xl font-bold font-rancho">Back to home</span></Link>
        <form>

        </form>

        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AddCoffe;
