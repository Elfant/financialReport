const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const joinDataFromRequests = require("./utils/joinDataFromRequests"); 


const port = process.env.PORT || 8000;

const app = express();

const publicDirectoryPath = path.join(__dirname, "../build");

app.use(express.static(publicDirectoryPath));

app.get("/report", (req, resp) => {
  joinDataFromRequests()
    .then((data) => {
      resp.send(data)
      }
    )
  
});

// app.get("*", (req, resp) => {
//   resp.sendFile(publicDirectoryPath);
// });

app.listen(port, () => 
  console.log(`Server is up on ${port}`)
);
