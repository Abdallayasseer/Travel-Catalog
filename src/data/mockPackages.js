export const mockPackages = [
  {
    id: 1,
    title: 'Paris Getaway',
    type: 'Vacation Bundle',
    description: '5 nights in Paris with flights and hotel included.',
    price: 1200,
    image: process.env.PUBLIC_URL + '/Paris Getaway.jpeg',
    duration: '5 nights',
    rating: 4.8,
    reviews: 124,
    location: 'Paris, France'
  },
  {
    id: 2,
    title: 'Tokyo Adventure',
    type: 'Flight',
    description: 'Round-trip flight to Tokyo.',
    price: 800,
    image: process.env.PUBLIC_URL + '/Tokyo Adventure.jpeg',  
    duration: '2 nights',
    rating: 4.5,
    reviews: 89,
    location: 'Tokyo, Japan'
  },
  {
    id: 3,
    title: 'Maldives Luxury',
    type: 'Vacation Bundle',
    description: '7 nights in Maldives with all-inclusive resort.',
    price: 3000,
    image: process.env.PUBLIC_URL + '/Maldives Luxury.jpeg',
    duration: '7 nights',
    rating: 4.9,
    reviews: 156,
    location: 'Maldives'
  },
  {
    id: 4,
    title: 'New York City Break',
    type: 'Flight',
    description: 'Direct flight to NYC.',
    price: 400,
    image: process.env.PUBLIC_URL + '/New York City Break.jpeg',
    duration: '3 nights',
    rating: 4.3,
    reviews: 67,
    location: 'New York, USA'
  }
];

export const packageTypes = ['All', 'Flight', 'Vacation Bundle']; 