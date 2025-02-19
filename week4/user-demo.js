const express = require('express');
const app = express();
const port = 7777;

app.use(express.json());

let userdb = new Map();
userdb.set("kyj", { pwd: "0807", name: "김영주" });

app.post('/login', (req, res) => {
  const { id, pwd } = req.body;
  if (userdb.has(id) && userdb.get(id).pwd === pwd) {
    res.send(`${userdb.get(id).name}님 환영합니다`);
  } else {
    res.send('로그인 실패');
  }
});

app.post('/join', (req, res) => {
  const { id, pwd, name } = req.body;
  userdb.set(id, { pwd, name });
  res.send(`${name}님 환영합니다`);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  if (userdb.has(id)) {
    const user = userdb.get(id);
    res.json({ id, pwd: user.pwd, name: user.name });
  } else {
    res.send(`ID가 ${id}인 회원이 존재하지 않습니다.`);
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  if (userdb.size === 0) {
    return res.send('삭제할 회원이 없습니다.');
  }
  if (userdb.has(id)) {
    const user = userdb.get(id);
    userdb.delete(id);
    res.send(`${user.name}님 다음에 또 뵙겠습니다`);
  } else {
    res.send(`ID가 ${id}인 회원이 존재하지 않습니다.`);
  }
});

app.listen(port, () => {
  console.log(`유저 데모 listening on port ${port}`);
});
