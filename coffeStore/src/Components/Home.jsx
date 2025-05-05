import bannerImg from "./images/more/3.png";
import Secondhero from "./Secondhero";


const Home = () => {
  return (
    <section className="md:min-h-screen">
      <section
     className="md:min-h-screen min-h-[94vh] hero relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: "center center",
        backgroundRepeat:'no-repeat',
        backgroundSize: "cover",
        
      }}
    >
      <div className="*:font-rancho grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto">
        <div className="col-span-6">

        </div>
        <div className=" col-span-6 items-center space-y-4">
          <h1 className="text-6xl text-white">Would you like a Cup of Delicious Coffee?</h1>
          <p className="text-white font-raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-btncl border-transparent">Learn more</button>
        </div>
        
      </div>
    </section>
    <Secondhero></Secondhero>
    </section>
    
    
  );
};

export default Home;
