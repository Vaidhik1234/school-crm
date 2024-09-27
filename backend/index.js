const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();


app.use(express.json({ limit: '10mb' }))
app.use(cors({
    origin: 'https://school-mangement-crm-aditya-shivhare.vercel.app'
  }));

mongoose
    .connect('mongodb+srv://hajelavaidhik:12Z8mNlpM9ZK6226@cluster0.wfinx.mongodb.net', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})