const axios = require('axios');
require('dotenv').config();

module.exports = {
    bookSearch: function(req, res) {
        console.log(req.body)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.title}&key=${process.env.GOOGLE_KEY}`)
        .then(response => res.json(response.data))
        .catch(err => console.log(err))
    }
}