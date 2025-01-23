import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import CategorySection from './components/CategorySection';
import SearchBar from './components/SearchBar';

function App() {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch toy data from the public folder
  useEffect(() => {
    fetch('/toys.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch toy data');
        }
        return response.json();
      })
      .then((data) => {
        setToys(data.toys);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // Filter toys based on search term
  const filteredToys = toys.filter(
    (toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group toys by category
  const categories = {};
  filteredToys.forEach((toy) => {
    if (!categories[toy.category]) {
      categories[toy.category] = [];
    }
    categories[toy.category].push(toy);
  });

  // Display loading or error messages
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Pass props to Header */}
      <main>
        {Object.entries(categories).map(([category, toysInCategory]) => (
          <CategorySection key={category} category={category} toys={toysInCategory} />
        ))}
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;