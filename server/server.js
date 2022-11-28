const express = require("express");
const path = require("path");
const db = require("./config/connections");
const routes = require("./routes"); // <- Will need to create routes folder and its contents later

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build"))); // <- This route may need to change in the fututre
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});