const express = require('express')
const app = express()
const port = 3000

const rainbow = [
    {id: 1, name: 'red'},
    {id: 2, name: 'oragne'},
    {id: 3, name: 'yellow'},
    {id: 4, name: 'green'},
    {id: 5, name: 'blue'},
    {id: 6, name: 'navy'},
    {id: 7, name: 'purple'}
];

// 무지개 출력
app.get('/rainbow', (req, res) => {
    res.json(rainbow);
});

// 색상 개별 조회
app.get('/rainbow/:id', (req, res) => {
    let color = rainbow.find(color => (color.id == req.params.id));

    if(color)
        res.json(color);
    else
        res.status(404).send(
            "색상이 없습니다."
    );
});

app.listen(port, () => {
    console.log(`무지개 listening on port ${port}`)
})