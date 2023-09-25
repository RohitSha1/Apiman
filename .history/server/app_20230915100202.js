require ("dotenv").config();
const express = require("express");
const app = express();
require("./database")
const cors = require("cors");

const PORT = 8000;

app.use(cors());
app.use(express.json());

// to get response 
// app.get("/", (req, res) =>{
//     res.status(200).json("Backend Server is Running");
// });

// Now server starting method
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
});