const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API Routes
app.get('/api/app-stats', (req, res) => {
  res.json({
    downloads: '350K+',
    rating: 3.7,
    ageRating: '18+',
    appName: 'Salvo Meet',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dating.datingworld&pcampaignid=web_share'
  });
});

app.get('/api/features', (req, res) => {
  res.json([
    { id: 1, title: 'Smart Matching', description: 'AI-powered matching algorithm finds your perfect partner based on interests and preferences.', icon: 'heart' },
    { id: 2, title: 'Video Calls', description: 'Connect face-to-face with HD video calling before meeting in person.', icon: 'video' },
    { id: 3, title: 'Verified Profiles', description: 'Every profile is verified to ensure genuine connections and safety.', icon: 'shield' },
    { id: 4, title: 'Private Chat', description: 'End-to-end encrypted messaging keeps your conversations private and secure.', icon: 'chat' },
    { id: 5, title: 'Location Based', description: 'Discover matches near you with our advanced location-based discovery.', icon: 'location' },
    { id: 6, title: 'Instant Match', description: 'Get notified instantly when someone likes you back. No waiting around!', icon: 'bolt' }
  ]);
});

app.get('/api/reviews', (req, res) => {
  res.json([
    { id: 1, name: 'Priya S.', rating: 5, comment: 'Found my soulmate here! The matching algorithm is incredible.', avatar: 'P' },
    { id: 2, name: 'Rahul M.', rating: 4, comment: 'Great app with genuine profiles. Highly recommend for serious dating.', avatar: 'R' },
    { id: 3, name: 'Ananya K.', rating: 4, comment: 'Love the video call feature! Makes it so much easier to connect.', avatar: 'A' },
    { id: 4, name: 'Vikram D.', rating: 5, comment: 'Best dating app in India. Clean interface and real people.', avatar: 'V' }
  ]);
});

// Catch-all: serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
