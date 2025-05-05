import { FaTwitter } from "react-icons/fa6";
import logo from "./images/more/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div>
        <img className="w-12" src={logo} alt="logo" />
        <h1 className="font-rancho text-4xl font-semibold">
          Espresso Emporium
        </h1>
        <h1 className="font-raleway">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </h1>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
