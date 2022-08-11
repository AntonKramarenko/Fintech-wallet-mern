const { Router } = require('express')
const lookup = require('binlookup')()
const Cards = require('../models/cards')
const router = Router()

router.get('/cards', async (req, res) => {
    const cards = await Cards.find()
    res.json(cards)
})

router.post('/cards', async (req, res) => {
    const bankInfo = await lookup(req.body.cardNumber).then(data => data)
    const cards = new Cards({
        amount: req.body.amount,
        bank: req.body.bank,
        cardHolder: req.body.cardHolder,
        cardNumber: req.body.cardNumber,
        currency: req.body.currency,
        cw: req.body.cw,
        expDate: req.body.expDate,
        bank: bankInfo.bank.name,
        scheme: bankInfo.scheme,
        type: bankInfo.type
    })

    await cards.save()
    res.status(200).send(true)
})

router.delete('/cards', async (req, res) => {
    await Cards.findOneAndDelete({ cardNumber: req.body.cardNumber })
    const cards = await Cards.find()

    res.json(cards)
})

module.exports = router