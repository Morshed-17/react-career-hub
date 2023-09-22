import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    job_title,
    job_type,
    logo,
    salary,
    company_name,
    location,
    remote_or_onsite,
  } = job;
  return (
    
    <div className="p-7 rounded-lg border grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      <div className="min-h-[240px] max-w-[240px] flex bg-slate-200 rounded-lg p-5 justify-center items-center flex-1">
        <figure>
          <img className="self-center" src={logo} alt="" />
        </figure>
      </div>
      <div className="col-span-4 self-center"> 
        <div className=" card-compact bg-base-100 rounded-md flex flex-col md:flex-row items-center">
          <div className="card-body ">
            <h2 className="card-title text-[#474747] text-xl">{job_title}</h2>
            <p className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
              {company_name}
            </p>
            <div className="flex gap-3">
              <button className="font-bold py-2 px-5 border border-slate-800 text-slate-700 rounded">
                {remote_or_onsite}
              </button>
              <button className="font-bold py-2 px-5 border border-slate-800 text-slate-700 rounded">
                {job_type}
              </button>
            </div>
            <div className="flex flex-col md:flex gap-6">
              <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
                <CiLocationOn className="font-semibold" />
                {location}
              </h3>
              <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
                <CiBadgeDollar />
                {salary}
              </h3>
            </div>
            
          </div>
          <div>
              <Link  to={`/job/${id}`}>
                <button className="btn btn-neutral">View Details</button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
