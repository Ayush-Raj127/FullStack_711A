import JobCard from "./JobCard";

export default function JobList({ jobs, onDelete, onApply }) {
  return (
    <section id="jobs" className="section">
      <h2>Latest Jobs</h2>
      <p className="job-count">
        Total Jobs: <strong>{jobs.length}</strong>
      </p>
      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDelete={onDelete}
            onApply={onApply}
          />
        ))}
      </div>
    </section>
  );
}