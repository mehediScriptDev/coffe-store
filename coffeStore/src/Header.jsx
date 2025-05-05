import logo from "./Components/images/more/logo1.png";
import bgimg from "./Components/images/more/15.jpg";


const Header = () => {
  return (
    <section style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
      <div className="flex justify-center">
        <div className="flex gap-2 justify-center items-center">
          <img className="md:w-16 w-10" src={logo} alt="nav logo" />
          <p className="font-rancho text-3xl font-[500px] md:text-5xl text-white">Espresso Emporium</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
