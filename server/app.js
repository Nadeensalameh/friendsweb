const express = require('express');
const app = express();


app.use('/users', require('./Routs/users-routs'));
app.use('/recipes', require('./Routs/Recipes'))




let port = 5112;
let host = "localhost";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

