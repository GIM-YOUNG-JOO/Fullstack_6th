const express = require('express');
const app = express();
const port = 7777;

app.use(express.json());

let userdb = new Map();
userdb.set("kyj", { pwd: "0807", name: "김영주" });

app.post('/login', (req, res) => {
  const { id, pwd } = req.body;
  if (userdb.has(id) && userdb.get(id).pwd === pwd) {
    if(userdb.get(id).pwd === pwd)
      res.send(`${userdb.get(id).name}님 환영합니다`);
    else
      res.send("잘못된 패스워드 입니다.");
  } else {
    res.send('입력하신 아이디는 없는 아이디 입니다.');
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
    return res.send('삭제할 회원 DB가 없습니다.');
  } else if (userdb.has(id)) {
    const user = userdb.get(id);
    userdb.delete(id);
    res.status(200).json({message : `${user.name}님 다음에 또 뵙겠습니다`});
  } else {
    res.status(404).json({message : `ID가 ${id}인 회원이 존재하지 않습니다.`});
  }
});

app.listen(port, () => {
  console.log(`유저 데모 listening on port ${port}`);
});
