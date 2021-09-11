const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.send("hello wrold")
})
app.listen(process.env.PORT || port, () => {
    console.log(`port in running ${port}`)
});