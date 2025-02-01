const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to return the required information
app.get('/', (req, res) => {
    const currentDatetime = new Date().toISOString();
    const response = {
        email: 'olaniyanlanny@gmail.com',
        current_datetime: currentDatetime,
        github_url: 'https://github.com/mikolanny/hngx-api'
    };
    res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
