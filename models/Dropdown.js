


const mongoose = require('mongoose');

uorhi = {
    type: String,
    required: true
};

const DropdownSchema =  new mongoose.Schema({
    name: uorhi,
    options: [String]
    // customers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Customer"
    // }]
});

const Dropdown = mongoose.model('Dropdown', DropdownSchema, 'dropdown');
module.exports = Dropdown;
