const Banner = () => {
    return (
      <div className="lg:flex items-center container mx-auto  justify-between">
        <div >
          <h3 className="lg:w-[570px] md:text-[80px] leading-tight font-extrabold">
            One Step Closer To Your
            <span className="primary-text"> Dream Job</span>
          </h3>
          <p className="text-[#757575] py-6 md:w-[519px] text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-neutral text-white font-bold">
            Get Started
          </button>
        </div>
        <img src="../assets/images/user.png" />
      </div>
    );
  };
  
    export default Banner;