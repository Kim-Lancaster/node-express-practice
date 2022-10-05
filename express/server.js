const { response } = require("express");
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    response.send('Hello')
})

app.listen(3000, () => {
    console.log(`I'm listening on port 3000`);
});