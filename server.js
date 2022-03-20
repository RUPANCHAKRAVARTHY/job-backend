const express = require("express");

const app = express();
const cors = require("cors");
require('dotenv').config();

const db = require("./db");

const jobsRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/usersRoute");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/jobs", jobsRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
