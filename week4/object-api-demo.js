const express = require('express')
const app = express()
const port = 3000

const db = new Map([
    ["수성", { diameter: 4879, distanceFromEarth: 91700000 }],
    ["금성", { diameter: 12104, distanceFromEarth: 41400000 }],
    ["지구", { diameter: 12742, distanceFromEarth: 0 }],
    ["화성", { diameter: 6779, distanceFromEarth: 78300000 }],
    ["목성", { diameter: 139820, distanceFromEarth: 628700000 }],
    ["토성", { diameter: 116460, distanceFromEarth: 1275000000 }],
    ["천왕성", { diameter: 50724, distanceFromEarth: 2724000000 }],
    ["해왕성", { diameter: 49244, distanceFromEarth: 4351000000 }]
]);

app.get('/planet', (req, res) => {
    res.json({
        message: "모든 행성 정보를 출력합니다.",
        planets: Object.fromEntries(db)
    });
});

app.get('/planet/:name', (req, res) => {
    const name = decodeURIComponent(req.params.name);
    console.log(name);

    if (db.has(name)) {
        const planet = db.get(name);
        res.json({ "지름": planet.diameter, "지구로부터의 거리": planet.distanceFromEarth });
    } else {
        res.json({ error: "행성이 아닙니다" });
    }
});

app.use(express.json());
app.post('/planet', (req, res) => {
    
    db.set(req.body.name, req.body.data);

    res.json("지구와 "+ req.body.name + " 사이의 거리는 " + db.get(req.body.name).distanceFromEarth + "km 입니다.");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})