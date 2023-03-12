const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes");
const PORT = 3001;



app.use(express.json())

mongoose.connect("mongodb+srv://akashgMDB:1q2w3e4r5T@cluster0.hwdbknn.mongodb.net/socialMedia", { useNewUrlParser: true })
    .then(() => console.log("connected to monogdb"))
    .catch((err) => console.log(err));

    
app.listen(PORT, () => console.log("server running on port",PORT));

app.use("/", routes);