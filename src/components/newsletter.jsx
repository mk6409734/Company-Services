const Newsletter = () => {
    return (
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
          <div className="m-2">
            <h1 className=" text-[20px] md:text-[40px] text-white font-bold">
              Want to learn latest I.T skills?
            </h1>
            <span className="text-white">
              Sign up to our newsletter and stay up to date
            </span>
          </div>
          <div className="m-2">
            <input type="text" className="p-3 mb-2 mr-2 text-gray-500 rounded" placeholder="Email"/>
            <button className=" my-2  text-white bg-black rounded-md p-3">
              Notify Me
            </button> 
            <br />
            <p className="text-white">We care about the protection of your data. Read our <br /> <a href="http://google.com" className="text-black font-bold">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    );

}

export default Newsletter;