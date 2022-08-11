const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const cashBalanceRoutes = require('./routes/cashBalance')
const cardsRoutes = require('./routes/cards')


const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cashBalanceRoutes)
app.use(cardsRoutes)

async function start() {
    try {
        const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.bw6tash.mongodb.net/wallet'
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true })

        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start()