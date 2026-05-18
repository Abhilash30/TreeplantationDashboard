const express = require("express");

const app = express();
const PORT = 3000;


let counter = 0;

// Allows frontend files to be served
app.use(express.static("public"));

// Route to get current counter value
app.get("/count", (req, res) => {
    res.json({
        count: counter
    });
});

// Route to increment counter
app.post("/increment", (req, res) => {
    counter++;

    res.json({
        count: counter
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});