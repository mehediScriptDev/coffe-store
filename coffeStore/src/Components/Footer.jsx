import { FaTwitter, FaVoicemail } from "react-icons/fa6";
import logo from "./images/more/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="bg-littlebg">
      <div className="mx-auto w-10/12 grid md:grid-cols-12 grid-cols-1">
      <div className=" py-5 col-span-6">
        <img className="w-12" src={logo} alt="logo" />
        <h1 className="font-rancho text-4xl font-semibold">
          Espresso Emporium
        </h1>
        <h1 className="font-raleway">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </h1>
        <div className="text-3xl flex gap-2 py-3 pb-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
        </div>

        <h1 className="font-rancho text-4xl font-semibold pb-3">Get in Touch</h1>
        <div>
          <p className="font-raleway flex gap-2 items-center"><FaPhoneAlt /> +88 01533 333 333</p>
          <p className="font-raleway flex gap-2 items-center"><IoMailSharp /> info@gmail.com</p>
          <p className="font-raleway flex gap-2 items-center"><FaLocationDot /> 72, Wall street, King Road, Dhaka</p>
        </div>
      </div>
      <div className="col-span-6">

      </div>
    </div>
    </section>
  );
};

export default Footer;
