<<<<<<< HEAD
// src/utils/mockUsers.js
export const mockUsers = [
  { email: 'admin1@example.com', password: 'admin123', role: 'admin' },
  { email: 'admin2@example.com', password: 'admin456', role: 'admin' },
  { email: 'user1@example.com', password: 'user123', role: 'user' },
  { email: 'user2@example.com', password: 'user456', role: 'user' }
];

export const getUser = (email, password) => {
  return mockUsers.find(u => u.email === email && u.password === password);
};
=======
// src/utils/mockUsers.js
export const mockUsers = [
  { email: 'admin1@example.com', password: 'admin123', role: 'admin' },
  { email: 'admin2@example.com', password: 'admin456', role: 'admin' },
  { email: 'user1@example.com', password: 'user123', role: 'user' },
  { email: 'user2@example.com', password: 'user456', role: 'user' }
];

export const getUser = (email, password) => {
  return mockUsers.find(u => u.email === email && u.password === password);
};
>>>>>>> 1f60df4f805ce2703cf624d1fcb286868e98a636
