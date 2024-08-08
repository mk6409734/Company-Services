import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [toggle, settoggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] items-center py-[15px] flex justify-between mx-auto">
        <div className="text-3xl font-bold">Gautam Industries</div>
        {toggle ? 
          <AiOutlineClose
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
         : 
          <AiOutlineMenu
            onClick={() => settoggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        }
       
        <ul className="hidden  md:flex gap-5 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul className={` duration-300  md:hidden text-white fixed bg-black top-[98px] w-full ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resources</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
