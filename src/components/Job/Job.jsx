import { CiLocationOn,CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
    const navigate = useNavigate()
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = job;
  return (
    <div className=" card-compact bg-base-100 shadow-lg rounded-md">
      
      <div className="card-body">
      <div className="flex justify-start">
        <img
          src={logo}
          alt="logo"
        />
      </div>
        <h2 className="card-title text-[#474747] text-xl">{job_title}</h2>
        <p className="flex items-center gap-2 text-lg text-[#757575] font-semibold">{company_name}</p>
        <div className="flex gap-3">
            <button className="font-bold py-2 px-5 border border-[#7E90FE] text-[#7E90FE] rounded">{remote_or_onsite}</button>
            <button className="font-bold py-2 px-5 border border-[#7E90FE] text-[#7E90FE] rounded">{job_type}</button>
        </div>
        <div className="flex gap-6">
            <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold"><CiLocationOn className="font-semibold"/>{location}</h3>
            <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold"><CiBadgeDollar/>{salary}</h3>
        </div>
        <div className="card-actions">
          <button onClick={() => navigate(`/job/${id}`)} className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
