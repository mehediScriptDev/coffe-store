import React from "react";

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
    <section className="w-11/12 mx-auto bg-formbg py-3 px-3">
      <p className="text-3xl text-center font-bold">Add coffe</p>
      <form onSubmit={submmitHandler}>
        <div className="flex justify-center">
          <label htmlFor="">
            <p>Coffe Name:</p>
            <input
              type="text"
              name="coffe"
              placeholder="enter coffe name"
              className="border-2 px-10  rounded-md w-full h-7"
            />
          </label>
          <label htmlFor="">
            <p>Coffe quantity:</p>
            <input
              name="quantity"
              type="text"
              placeholder="enter coffe quantity"
              className="border-2 px-10 rounded-md w-full h-7"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label htmlFor="">
            <p>Supplier:</p>
            <input
              type="text"
              name="supplier"
              placeholder="enter coffe name"
              className="border-2 px-10  rounded-md w-full h-7"
            />
          </label>
          <label htmlFor="">
            <p>Taste:</p>
            <input
              type="text"
              name="taste"
              placeholder="enter coffe quantity"
              className="border-2 px-10 rounded-md w-full h-7"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label htmlFor="">
            <p>Category:</p>
            <input
              name="category"
              type="text"
              placeholder="enter coffe name"
              className="border-2 px-10  rounded-md w-full h-7"
            />
          </label>
          <label htmlFor="">
            <p>Details:</p>
            <input
              type="text"
              name="details"
              placeholder="enter coffe quantity"
              className="border-2 px-10 rounded-md w-full h-7"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="">
            <p>photoURL</p>
            <input
              type="text"
              name="photo"
              placeholder="enter coffe name"
              className="border-2 px-10  rounded-md w-full h-7"
            />
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="submit"
            className="btn bg-btnbg text-white w-1/3"
            value="Add"
          />
        </div>
      </form>
    </section>
  );
};

export default AddCoffe;
