import React, { useState, useEffect } from 'react';
import { fetchPackages, searchPackages, filterPackagesByType } from './services/api';
import { packageTypes } from './data/mockPackages';
import './Catalog.css';

const Catalog = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    try {
      setLoading(true);
      const data = await fetchPackages();
      setPackages(data);
      setError(null);
    } catch (err) {
      setError('Failed to load packages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setSearch(value);
    try {
      setLoading(true);
      const results = await searchPackages(value);
      setPackages(results);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTypeFilter = async (type) => {
    setSelectedType(type);
    try {
      setLoading(true);
      const results = await filterPackagesByType(type);
      setPackages(results);
    } catch (err) {
      setError('Filtering failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={loadPackages} className="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Travel Packages</h2>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search packages..."
          value={search}
          onChange={e => handleSearch(e.target.value)}
          className="search-input"
        />
        
        <div className="type-filters">
          {packageTypes.map(type => (
            <button
              key={type}
              className={`type-filter ${selectedType === type ? 'active' : ''}`}
              onClick={() => handleTypeFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading packages...</p>
        </div>
      ) : (
        <div className="packages-grid">
          {packages.length === 0 ? (
            <p className="no-results">No packages found matching your criteria.</p>
          ) : (
            packages.map(pkg => (
              <div key={pkg.id} className="package-card">
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.title} />
                </div>
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <span className="package-type">{pkg.type}</span>
                  <p className="package-location">{pkg.location}</p>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-rating">
                    <span>★ {pkg.rating}</span>
                    <span>({pkg.reviews} reviews)</span>
                  </div>
                  <div className="package-footer">
                    <div className="package-details">
                      <span className="package-price">${pkg.price}</span>
                      <span className="package-duration">{pkg.duration}</span>
                    </div>
                    <button className="book-button">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog; 