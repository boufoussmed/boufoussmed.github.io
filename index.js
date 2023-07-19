const express = require('express')

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    res.send({ hi: 'there' })
})

app.listen(5000, rep => {
    console.log('listening on port', rep);
});

console.log('hey');