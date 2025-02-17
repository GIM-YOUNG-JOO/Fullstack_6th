const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/test/:parameter", (req, res) => {
    const parameter = req.params.parameter; // URL에서 파라미터 추출
    res.send(`전달된 값: ${parameter}`);
});

app.get("/product/:parameter/:price", (req, res) => {
    const parameter = req.params.parameter;
    const price = req.params.price;
    res.json({
        "title" : parameter,
        price : price
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})