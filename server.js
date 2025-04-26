const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Endpoints for buttons
app.post('/about-us', (req, res) => {
    res.send('About Us button clicked');
});

app.post('/contact', (req, res) => {
    res.send('Contact button clicked');
});

// Example for additional buttons
app.post('/work', (req, res) => {
    res.send('Work button clicked');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
