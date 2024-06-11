const express = require('express');
const axios = require('axios');
const cors=require('cors');


const app = express();
const PORT =  3000;
const API_URL = "https://jupiter1xl-2e281856744c.herokuapp.com/api/contents/";
app.use(cors());

app.get('/api/contents', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        console.error(error);

        if (error.response) {
            res.status(error.response.status).json({ message: 'Error fetching data from the server', error: error.response.data });
        } else if (error.request) {
            res.status(504).json({ message: 'No response received from the server', error: error.message });
        } else {
            res.status(500).json({ message: 'Error setting up the request', error: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
