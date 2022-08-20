const { Router } = require('express')
const lookup = require('binlookup')()
const Cards = require('../models/cards')
const router = Router()

router.get('/cards', async (req, res) => {
    const cards = await Cards.find()
    res.json(cards)
})

router.post('/cards', async (req, res) => {
    try {

        const fake = '9293392293'
        // const bankInfo = await lookup(req.body.cardNumber.replaceAll(' ', '')).then(data => data)
        const bankInfo = await lookup(fake).then(data => data)



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
        return res.status(200)



    } catch (error) {
        return res.status(400).send(new Error())
        console.log('error', error);
    }

})

router.delete('/cards', async (req, res) => {
    await Cards.findOneAndDelete({ cardNumber: req.body.cardNumber })
    const cards = await Cards.find()

    res.json(cards)
})

module.exports = router