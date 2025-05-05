import icon1 from "./images/icons/1.png";
import icon2 from "./images/icons/2.png";
import icon3 from "./images/icons/3.png";
import icon4 from "./images/icons/4.png";

const Secondhero = () => {
  return (
    <section>
      <div className=" bg-iconbg">
        <div className="w-10/12 mx-auto  justify-between grid md:grid-cols-4 grid-cols-2">
          <div className="px-3 py-4 col-span-1 ">
            <img src={icon1} alt="icon" />
            <p className="md:text-3xl text-2xl font-rancho">Awesome Aroma</p>
            <p className="font-raleway text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          <div className="px-3 py-4 col-span-1">
            <img src={icon2} alt="icon" />
            <p className="md:text-3xl text-2xl font-rancho">Awesome Aroma</p>
            <p className="font-raleway text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          <div className="px-3 py-4 col-span-1">
            <img src={icon3} alt="icon" />
            <p className="md:text-3xl text-2xl font-rancho">Awesome Aroma</p>
            <p className="font-raleway text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          <div className="px-3 py-4 col-span-1">
            <img src={icon4} alt="icon" />
            <p className="md:text-3xl text-2xl font-rancho">Awesome Aroma</p>
            <p className="font-raleway text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondhero;
