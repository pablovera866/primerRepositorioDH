let express = require("express");
let app = express();

let path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});
