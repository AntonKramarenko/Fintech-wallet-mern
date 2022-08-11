const { Schema, model } = require('mongoose')

const cashBalance = new Schema({
    cashBalance: [
        {
            currency: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            }
        }
    ]
})

module.exports = model('CashBalance', cashBalance)