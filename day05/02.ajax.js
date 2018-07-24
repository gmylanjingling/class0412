const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send('这是服务器返回的ajax的响应');
})

app.listen(3000, () => console.log('服务器启动成功了'));