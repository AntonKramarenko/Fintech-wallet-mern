const { Schema, model } = require('mongoose')

const cards = new Schema({
    cardNumber: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    cw: {
        type: String,
        required: true
    },
    cardHolder: {
        type: String,
        required: false
    },
    currency: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: false,
        default: 'BANK'
    },
    scheme: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    }
})

module.exports = model('Cards', cards)