import { ReactTyped } from "react-typed";


const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[75px]">
      <div className="max-w-[1240px] py-[60px] mx-auto text-center font-bold">
        <div className=" text-xl md:text-3xl md:p-[24px]">Learn with us</div>
        <h2 className="text-white text-3xl md:text-[60px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="text-white text-4xl md:p-[24px]">
          Learn
          <ReactTyped
            className="pl-2"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            loop={true}
          />
        </div>
        <button className="text-white bg-black rounded-md mt-5 p-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
