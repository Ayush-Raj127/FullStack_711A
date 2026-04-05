export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HireHub</div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}