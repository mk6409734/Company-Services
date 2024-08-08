import Single from '../images/single.png'
import Double from '../images/double.png'
import Triple from '../images/triple.png'

const Plans = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3">
        <div className="shadow-xl h-[500px] my-4 mx-4 hover:scale-105 duration-500 text-center">
          <img src={Single} alt="" className="w-20 mx-auto  bg-white" />
          <h1 className="my-7 font-bold text-3xl">Web development</h1>
          <h3 className="my-7 font-bold text-3xl">$149</h3>
          <p className="my-7 font-medium">Lorem ipsum dolor sit.</p>
          <p className="my-7 px-3 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            quia?
          </p>
          <p className="my-7 font-medium">Lorem ipsum dolor sit amet.</p>
          <button className=" my-2 w-32 text-black font-medium bg-[#00df9a] rounded-md p-3">
            Start Trial
          </button>
        </div>
        <div className="shadow-xl h-[500px] my-4 mx-4 hover:scale-105 duration-500 bg-gray-100 text-center relative">
          <img src={Double} alt="" className="w-20 mx-auto  bg-transparent" />
          <h1 className="my-7 font-bold text-3xl">Digital Marketing</h1>
          <h3 className="my-7 font-bold text-3xl">$149</h3>
          <p className="my-7 font-medium">Lorem ipsum dolor sit.</p>
          <p className="my-7 px-3 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            quia?
          </p>
          <p className="my-7 font-medium">Lorem ipsum dolor sit amet.</p>
          <button className=" my-2 w-32 bg-black font-medium text-[#00df9a] rounded-md p-3">
            Start Trial
          </button>
        </div>
        <div className="shadow-xl h-[500px] my-4 mx-4 hover:scale-105 duration-500 text-center">
          <img src={Triple} alt="" className="w-20 mx-auto  bg-white" />
          <h1 className="my-7 font-bold text-3xl">App development</h1>
          <h3 className="my-7 font-bold text-3xl">$149</h3>
          <p className="my-7 font-medium">Lorem ipsum dolor sit.</p>
          <p className="my-7 px-3 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            quia?
          </p>
          <p className="my-7 font-medium">Lorem ipsum dolor sit amet.</p>
          <button className=" my-2 w-32 text-black font-medium bg-[#00df9a] rounded-md p-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
