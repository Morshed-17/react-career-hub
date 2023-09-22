const getStoredId = () => {
  const jobApplications = localStorage.getItem("job-applications");
  if (jobApplications) {
    return JSON.parse(jobApplications);
  }
  return [];
};

const saveToLocal = (id) => {
  const storedJobApplications = getStoredId();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoredId, saveToLocal };
