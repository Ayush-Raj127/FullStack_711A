export default function JobCard({ job, onDelete, onApply }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <span>{job.location}</span>
      <button
        className={`apply-btn ${job.applied ? "applied" : ""}`}
        onClick={() => onApply(job.id)}
        disabled={job.applied}
      >
        {job.applied ? "Applied" : "Apply"}
      </button>
      <button className="delete-btn" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </div>
  );
}