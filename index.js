const express = require('express');
const app = express();
const PORT = 3000;

// JSON data ko parse karne ke liye middleware (agar aap POST requests handle kar rahe hain)
app.use(express.json());

// 1. GET Route - Base URL '/' ke liye
app.get('/', (req, res) => {
    res.send('Hello World! Aapka Express server chal raha hai. 🚀');
});

// 2. GET Route - Ek simple API endpoint '/api/user'
app.get('/api/user', (req, res) => {
    res.json({
        id: 1,
        name: 'John Doe',
        role: 'Developer'
    });
});

// 3. POST Route - Data receive karne ke liye
app.post('/api/data', (req, res) => {
    const incomingData = req.body;
    res.status(201).json({
        message: 'Data successfully received!',
        data: incomingData
    });
});
9
// Server ko port par listen karwana
app.listen(PORT, () => {
    console.log(`Server successfully running on: http://localhost:${PORT}`);
});