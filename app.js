const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    email: 'liasu.olabayo@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/holabayor/hng12-stage-one',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
