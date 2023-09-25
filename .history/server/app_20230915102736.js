require ("dotenv").config();
const express = require("express");
const app = express();
require("./database/connection");
const cors = require("cors");
const router = require("./Routes/router");
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(router)

// to get response 
// app.get("/", (req, res) =>{
//     res.status(200).json("Backend Server is Running");
// });

// Now server starting method
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
});