import { useState } from "react";

export default function AddJob({ onAdd }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit() {
    if (!title || !company || !location) {
      alert("Please fill all fields");
      return;
    }
    onAdd(title, company, location);
    setTitle("");
    setCompany("");
    setLocation("");
  }

  return (
    <section className="section gray">
      <h2>Add a Job</h2>
      <div className="add-job-box">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company · Job Type"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSubmit}>Post Job</button>
      </div>
    </section>
  );
}