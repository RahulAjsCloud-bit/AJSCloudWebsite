import React from "react";
import Card from "./Card";

const products = [
  { icon: "💻", title: "Laptop", description: "High-performance laptops" },
  { icon: "📱", title: "Mobile", description: "Latest smartphones" },
  { icon: "🖥️", title: "Monitor", description: "4K UHD Monitors" },
];

const StoreSection = () => {
  return (
    <section className="store-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="cards-container">
          {products.map((product, idx) => (
            <Card key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
