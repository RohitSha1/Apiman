require ("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8000;

app.use(cors());
app.use(express.ja)