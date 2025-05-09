import { mockPackages } from '../data/mockPackages';

// This will be replaced with real API calls when the backend is ready
export const fetchPackages = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPackages;
};

export const searchPackages = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockPackages.filter(pkg =>
    pkg.title.toLowerCase().includes(query.toLowerCase()) ||
    pkg.description.toLowerCase().includes(query.toLowerCase()) ||
    pkg.location.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterPackagesByType = async (type) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  if (type === 'All') return mockPackages;
  return mockPackages.filter(pkg => pkg.type === type);
}; 