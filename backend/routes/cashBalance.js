const { Router } = require('express')
const CashBalance = require('../models/cashBalance')
const router = Router()


router.get('/cashBalance', async (req, res) => {
    const cashBalance = await CashBalance.find()

    if (cashBalance.length === 0) {
        const cash = new CashBalance({
            cashBalance: [{ currency: "UAH", amount: 0 }]
        })
        await cash.save()
        res.json(cash)
    } else {
        res.json(cashBalance)
    }
})

router.post('/cashBalance', async (req, res) => {
    const cashBalance = await CashBalance.find()
    await CashBalance.findByIdAndDelete(cashBalance[0]._id)

    const cash = new CashBalance({ cashBalance: req.body })
    await cash.save()
})



module.exports = router