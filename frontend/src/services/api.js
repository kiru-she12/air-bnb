const API_URL = 'http://localhost:8000/api';

const mockProperties = [
  { id: 1, title: 'Beachfront Villa', location: 'Malibu, California', price_per_night: 850, rating: 4.95, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Modern Cabin in the Woods', location: 'Lake Tahoe, Nevada', price_per_night: 295, rating: 4.88, image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Luxury Penthouse Suite', location: 'New York City, NY', price_per_night: 1200, rating: 4.99, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Secluded Treehouse', location: 'Austin, Texas', price_per_night: 450, rating: 4.91, image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Desert Oasis Estate', location: 'Joshua Tree, CA', price_per_night: 350, rating: 4.85, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Alpine Chalet', location: 'Aspen, Colorado', price_per_night: 600, rating: 4.92, image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Cozy Cottage by the Lake', location: 'Door County, WI', price_per_night: 180, rating: 4.75, image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Historic European Flat', location: 'Rome, Italy', price_per_night: 220, rating: 4.98, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800' }
];

export const fetchProperties = async () => {
  try {
    const response = await fetch(`${API_URL}/properties`);
    if (!response.ok) throw new Error('Network response was not ok');
    const result = await response.json();
    if (result.status === 'success' && result.data.length > 0) {
      return result.data;
    }
    throw new Error('No properties found from API');
  } catch (error) {
    console.log('Backend API is offline. Serving mock UI data instead.');
    return mockProperties;
  }
};
