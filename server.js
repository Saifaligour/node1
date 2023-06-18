const express = require("express");
// const rabit = require("./rabit");
const app = express();
const PORT = process.env.PORT || 3004;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
  res.send(
    `<h2>Hello World! How are you word? I am node 4 ${req.query.msg || ""}</h2>`
  );
  console.log(req.query);
});
app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
