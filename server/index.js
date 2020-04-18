const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const getCompanies = require("./utils/getCompanies"); 

const port = process.env.PORT || 8000;

const app = express();

const publicDirectoryPath = path.join(__dirname, "../build");

app.use(express.static(publicDirectoryPath));

app.get("/report", (req, resp) => {
  resp.append('Access-Control-Allow-Origin', '*');

  getCompanies()
    .then((data) => {
      resp.send(data)
      }
    )
});

app.listen(port, () => 
  console.log(`Server is up on ${port}`)
);
