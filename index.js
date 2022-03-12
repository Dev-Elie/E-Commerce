const express = require("express");
const app = express();

const moongose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")

dotenv.config();


moongose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connected")
}).catch((error) => {
    console.log(error)
})
app.use(express.json())
app.use("/api/v1.1/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is up")
})