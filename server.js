const express = require("express");
const app = express();

//Init middleware
app.use(express.json({ extended: false }));


app.use("/api/users", require("./routes/users"));
app.use("/api/places", require("./routes/places"));

app.listen(5000);