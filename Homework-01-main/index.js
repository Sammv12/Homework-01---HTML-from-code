const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('src'));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});




