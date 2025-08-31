const express = require('express');
const app = express();
const PORT = 3000;

app.get('/get', async (req, res) => {
    res.status(200).json({ message: 'working' });
});

app.get('/post', async (req, res) => {
    res.status(200).json({ message: 'Post menton' });
});

app.put('/put', async (req, res) => {
    res.status(200).json({ message: 'Post menton' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
