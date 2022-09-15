const express = require("express");
const cors = require("cors");

// these will be bind-mounted in docker run
const account = require("../configs/account");
const vehicleMap = require("../configs/vehicle-map");

const PORT = 8080;

const app = express();
app.use(cors());

app.get("/configs", (req, res) => {
  const result = {
    account,
    vehicleMap,
  };
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
