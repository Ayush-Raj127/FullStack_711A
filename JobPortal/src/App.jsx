import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AddJob from "./components/AddJob";
import JobList from "./components/JobList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [jobs, setJobs] = useState([]);

  function addJob(title, company, location) {
    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      applied: false,
    };
    setJobs([...jobs, newJob]);
  }

  function deleteJob(id) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  function applyJob(id) {
    setJobs(jobs.map((job) =>
      job.id === id ? { ...job, applied: true } : job
    ));
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <AddJob onAdd={addJob} />
      <JobList jobs={jobs} onDelete={deleteJob} onApply={applyJob} />
      <Contact />
      <Footer />
    </>
  );
}