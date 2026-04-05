const categories = [
  "Delivery", "Customer Support", "IT & Software",
  "Sales", "Security", "Data & Analytics"
];

export default function Categories() {
  return (
    <section id="categories" className="section">
      <h2>Popular Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat}>{cat}</div>
        ))}
      </div>
    </section>
  );
}