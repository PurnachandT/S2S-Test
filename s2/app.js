const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8001;

app.use(cors());

app.get('/', (req, res) => {
    console.log("Received request on '/' endpoint");
    res.json({
        message: "server 2 starts here"
    });
});

app.get('/paydart', async (req, res) => {
    try {
        console.log("Received request on '/paydart' endpoint");
        const server1_url = "http://localhost:8000/api/v1/create";
        console.log(`Making request to s1 at ${server1_url}`);
        const response = await axios(server1_url);
        
        console.log("Received response from s1:");
        console.log(response.data);

        const paymentLink = response.data.server1['payment_link'];
        console.log(`Extracted payment link: ${paymentLink}`);

        res.json({
            data: paymentLink
        });
    } catch (e) {
        console.error("Error occurred while processing '/paydart' endpoint:", e.message);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

app.listen(port, () => {
    console.log(`S2 is running at port ${port}`);
});
