import cup from "./images/cups/Rectangle 10.png";
import cup1 from "./images/cups/Rectangle 11.png";
import cup2 from "./images/cups/Rectangle 12.png";
import cup3 from "./images/cups/Rectangle 13.png";
import cup4 from "./images/cups/Rectangle 14.png";
import cup5 from "./images/cups/Rectangle 15.png";
import cup6 from "./images/cups/Rectangle 16.png";
import cup7 from "./images/cups/Rectangle 9.png";

const FollowInsta = () => {
  return (
    <section className=" mt-20 pb-10">
      <div className="">
        <p className="font-raleway text-center">Follow Us Now</p>
        <p className="text-5xl font-bold text-textcl font-rancho text-center">
          Follow on Instagram
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 gap-y-4 mt-7 w-10/12 mx-auto grid-cols-2">
        <img src={cup} alt="" className="w-full h-full" />
        <img src={cup1} alt="" className="w-full h-full" />
        <img src={cup2} alt="" className="w-full h-full" />
        <img src={cup3} alt="" className="w-full h-full" />
        <img src={cup4} alt="" className="w-full h-full" />
        <img src={cup5} alt="" className="w-full h-full" />
        <img src={cup6} alt="" className="w-full h-full" />
        <img src={cup7} alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default FollowInsta;
