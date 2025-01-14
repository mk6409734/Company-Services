import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#2699fb]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
        <div>
          <h1 className="w-full text-3xl font-bold text-black">Gautam Industries</h1>
          <p className="py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia earum
            repudiandae distinctio quibusdam omnis corrupti.
          </p>
          <div className="flex justify-evenly md:justify-between md:w-[75%] my-6 text-black">
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaGithub size={30} />
            <FaXTwitter size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ml-4 p-4">
          <div>
            <h6 className="font-medium text-black">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Legel</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
