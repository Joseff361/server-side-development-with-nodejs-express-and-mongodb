const express = require('express')
const bodyParser = require('body-parser')

const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json())

promotionRouter.route('/')
.all((req, res, next) => {
   res.statusCode = 200
   res.setHeader = ('Content-Type', 'text-html')
   next()
})
.get((req, res, next) => {
    res.end(`Will send all the promotions to you!`)
})
.post((req, res, next) => {
    res.end(`Will add the promotion: ${req.body.name} whit details: ${req.body.description}`)
})
.put((req, res, next) => {
    res.end('PUT operation not supported on /promotions')
})
.delete((req, res, next) => {
    res.end(`Deleting all the promotions to you!`)
})


promotionRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/html')
    next()
})
.get((req, res, next) => {
    res.end(`Will send details of the promotion: ${req.params.promoId} to you!`)
})
.post((req, res, next) => {
    res.statusCode = 403 
    res.end(`POST operation not supported on /promotions/${req.params.promoId}`)
})
.put((req, res, next) => {
    res.write(`Updating the promotion: ${req.params.promoId} \n`)
    res.end(`Will update the promotion: ${req.body.name} with the details: ${req.body.description}`)
})
.delete((req, res, next) => {
    res.end(`Deleting promotion: ${req.params.promoId}`)
})


module.exports = promotionRouter