const express = require('express');
require('./db/mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


require('./routes/html_routes.js')(app);
require('./routes/api_routes.js')(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});