const express = require("express");
const cors = require("cors");
require("./db/config");
const app = express();
const Users = require("./db/User");

app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = new Users(req.body);
  let data = await user.save();
  resp.send(data);
});

app.listen(4000);
