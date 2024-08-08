import laptop from '../images/lap.jpg'

const Expert = () => {
    return (
      <div className="max-w-[1240px] mx-auto my-[100px] items-center md:grid grid-cols-2">
        <div className="col-span-1 md:w-[80%]">
          <img src={laptop} alt="" className="inline rounded-xl" />
        </div>
        <div className="col-span-1 flex flex-col">
          <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
          <p className="my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            accusantium ratione, ipsum error exercitationem ipsam illo quaerat
            unde nihil harum libero atque earum, quos soluta aut saepe amet ex
            animi?
          </p>
          <button className=" my-2 w-[30%] text-white bg-black rounded-md p-3">
            Get Started
          </button>
        </div>
      </div>
    );
}

export default Expert;