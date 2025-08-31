const express = require('express');
const app = express();
const PORT = 3000;

app.get('/get', async (req, res) => {
    res.status(200).json({ message: 'working' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
