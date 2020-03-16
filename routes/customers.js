const router = require('express').Router();
const passport = require('passport');
// const settings = require('../config/passport')(passport);

let Customer = require('../models/Customer');



//Getting all the customers
router.route('/').get((req, res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: ' + err)); //status 400 means bad request
        console.log("You are trying to get all customers")
});



//Finding a specific customer
router.route("/:id").get((req, res) => {
    const customerId = req.params.id;

    Customer.findById(customerId)
        .then(result => {
            if(!result){
                return res.status(404).json({
                    message: "Customer not found with id " + customerId
                });
            }
            res.json(result);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    message: "Customer not found with id " + customerIdcustomer});
            }
            return res.status(500).json({
                message: "Error retrieveing character with id " + customerId
            });
        });
        console.log("You are trying to get a customer by id")
});



//Creating a customer
router.route("/").post((req, res) => {
    const customers = req.body;

    const newCustomer = new Customer(customers);

    newCustomer.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('Error: ' + err));

    console.log("You are trying to create a customer")
});

module.exports = router;
