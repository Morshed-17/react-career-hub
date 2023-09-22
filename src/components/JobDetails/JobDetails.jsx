import { useLoaderData, useParams } from "react-router-dom";
import {
  AiOutlineDollarCircle,
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveToLocal } from "../../utility/LocalStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { Id } = useParams();
  const intId = parseInt(Id)

  const job = jobs.find((job) => job.id == Id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = job;
  const { phone, email, address } = contact_information;

  const handleApplyToJob = () => {
    saveToLocal(intId);
    toast.success("Succesfully applied");
  };

  return (
    <div className="my-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="col-span-2  rounded-lg">
          <h4 className="text-lg font-bold mb-6">
            Job Description:{" "}
            <span className="font-normal text-lg text-[#474747]">
              {job_description}
            </span>
          </h4>

          <h4 className="text-lg font-bold mb-6">
            Job Responsibility:{" "}
            <span className="font-normal text-lg text-[#474747]">
              {job_responsibility}
            </span>
          </h4>

          <h4 className="text-lg font-bold mb-6">Educational Requirements: </h4>
          <p className="font-normal text-lg text-[#474747]">
            {educational_requirements}
          </p>

          <h4 className="text-lg font-bold mb-2">Experiences: </h4>
          <p className="font-normal text-lg text-[#474747]">{experiences}</p>
        </div>
        <div>
          <div className=" rounded-lg p-8 bg-gradient-to-t from-[#7E90FE1A] to-[#9873FF1A]">
            <h3 className="text-lg font-semibold">Job Details</h3>
            <hr className="my-6" />
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <AiOutlineDollarCircle className="text-[#9873FF]" />
              Salary:{" "}
              <span className="text-[#474747] font-normal">{salary}</span>
            </h4>
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <AiOutlineCalendar className="text-[#9873FF]" />
              Job Title:{" "}
              <span className="text-[#474747] font-normal">{job_title}</span>
            </h4>
            <h3 className="text-lg font-semibold mt-8">Contact Information</h3>
            <hr className="my-6" />
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <AiOutlinePhone className="text-[#9873FF]" />
              Phone: <span className="text-[#474747] font-normal">{phone}</span>
            </h4>
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <AiOutlineMail className="text-[#9873FF]" />
              Email: <span className="text-[#474747] font-normal">{email}</span>
            </h4>
            <h4 className="text-lg font-semibold flex items-center  gap-2">
              <TfiLocationPin className="text-[#9873FF]" />
              Address:{" "}
            </h4>
            <span className="text-[#474747] font-normal text-lg">
              {address}
            </span>
          </div>
          <div>
            <button
              onClick={handleApplyToJob}
              className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
