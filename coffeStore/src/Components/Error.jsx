import banner from "./images/404/404.gif";

const Error = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex justify-center w-full h-screen  items-center">
        <img className="flex justify-center" src={banner} alt="404 error pic" />
      </div>
    </section>
  );
};

export default Error;
