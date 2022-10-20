const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

const categories = require('./data/categories.json');

app.get('/news-category', (req, res) => {
    res.send(categories);
})

app.get('/', (req, res) => {
    res.send('*ASSALAMU ALAIKUM* ___ Dragon news server is running...')
})

app.listen(port, () => {
    // console.log('Dragon news server is running on port', port);
    console.log(`Dragon news server is running on: ${port}`);
})