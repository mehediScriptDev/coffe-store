import { FaTwitter, FaVoicemail } from "react-icons/fa6";
import logo from "./images/more/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import footerImg from './images/more/24.jpg'
const Footer = () => {
  return (
    <section className="bg-littlebg">
      <div className="w-10/12 mx-auto pt-3">
        <img className="w-12" src={logo} alt="logo" />
      </div>
      <div className="mx-auto w-10/12 grid md:grid-cols-12 grid-cols-1">
        <div className=" py-5 col-span-6">
          <h1 className="font-rancho text-textcl pb-3 text-4xl font-semibold">
            Espresso Emporium
          </h1>
          <h1 className="font-raleway">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </h1>
          <div className="text-3xl text-textcl flex gap-2 py-3 pb-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>

          <h1 className="font-rancho text-textcl text-4xl font-semibold pt-5 pb-3">
            Get in Touch
          </h1>
          <div className="space-y-3">
            <p className="font-raleway flex gap-2 items-center">
              <FaPhoneAlt /> +88 01533 333 333
            </p>
            <p className="font-raleway flex gap-2 items-center">
              <IoMailSharp /> info@gmail.com
            </p>
            <p className="font-raleway flex gap-2 items-center">
              <FaLocationDot /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
        <div className="col-span-6 py-5">
          <h1 className="font-rancho pb-3 text-textcl text-4xl font-semibold">
            Connect with Us
          </h1>
          <form>
            <div className="flex flex-col gap-y-3 ">
              <label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-md w-full"
                  placeholder="Name"
                  name="name"
                  id=""
                />
              </label>
              <label>
                <input
                  type="email"
                  className="px-4 py-2 rounded-md w-full"
                  placeholder="Email"
                  name="email"
                  id=""
                />
              </label>
              <label htmlFor="">
                <textarea
                  name=""
                  className="rounded-md w-full px-4 py-1 h-28"
                  placeholder="Message"
                  id=""
                ></textarea>
              </label>
              <label htmlFor="">
                <input
                  type="submit"
                  className="btn btn-outline border-textcl rounded-full text-textcl  font-rancho"
                  value="Send Message"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <footer
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }} className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="font-rancho text-white">
          Copyright Espresso Emporium ! All Rights Reserved
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
