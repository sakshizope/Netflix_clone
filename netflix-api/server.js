//1.  importing packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// 5. Route
const UserRoutes = require("./routes/UserRoutes");


//3.  middlewares
const app = express();
app.use(express.json());
app.use(cors());

// 6. Initialise a Route
app.use("/api/user", UserRoutes);

// 4. MongoDb Connection
mongoose.connect("mongodb://niklaus:12345@ac-fcrkhgr-shard-00-00.4d6eoli.mongodb.net:27017,ac-fcrkhgr-shard-00-01.4d6eoli.mongodb.net:27017,ac-fcrkhgr-shard-00-02.4d6eoli.mongodb.net:27017/netflix?ssl=true&replicaSet=atlas-ny7sx1-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database Connect Successfully !");
}).catch((error) => {
    console.log(error);
});

// 2. server
app.listen(5000, () => {
    console.log("Node server is Running !!!");
});