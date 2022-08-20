const { Router } = require('express')
const isValidCardNumber = require('../helpers/cardValidate')
const lookup = require('binlookup')()
const Cards = require('../models/cards')
const router = Router()

router.get('/cards', async (req, res) => {
    const cards = await Cards.find()
    res.json(cards)
})

router.post('/cards', async (req, res) => {
    try {
        const card = await Cards.find({ cardNumber: req.body.cardNumber.replaceAll(' ', '') })

        if (!isValidCardNumber(req.body.cardNumber)) {
            throw new Error()
        }

        if (!card.length) {
            const bankInfo = await lookup(req.body.cardNumber.replaceAll(' ', '')).then(data => data)

            const cards = new Cards({
                amount: req.body.amount,
                bank: req.body.bank,
                cardHolder: req.body.cardHolder,
                cardNumber: req.body.cardNumber.replaceAll(' ', ''),
                currency: req.body.currency,
                cw: req.body.cw,
                expDate: req.body.expDate,
                bank: bankInfo.bank.name,
                scheme: bankInfo.scheme,
                type: bankInfo.type
            })
            await cards.save()
            return res.sendStatus(200)
        } else {
            res.statusMessage = "cardExist";
            res.status(400).end();
        }
    } catch (error) {
        console.log('error', error);
        res.statusMessage = "cardError";
        res.status(400).end();
    }

})

router.delete('/cards', async (req, res) => {
    await Cards.findOneAndDelete({ cardNumber: req.body.cardNumber })
    const cards = await Cards.find()

    res.json(cards)
})

module.exports = router