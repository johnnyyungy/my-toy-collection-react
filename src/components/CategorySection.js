import React from 'react';
import ToyCard from './ToyCard';

function CategorySection({ category, toys }) {
  return (
    <section id={category.toLowerCase().replace(/ /g, '-')} className="category">
      <h2>{category}</h2>
      <div className="products">
        {toys.map(toy => (
          <ToyCard key={toy.name} toy={toy} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;