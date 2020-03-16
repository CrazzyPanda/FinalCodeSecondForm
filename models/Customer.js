const mongoose = require('mongoose');


const CustomerSchema = new mongoose.Schema({
    address: {
        type: String
    },
    address_results: {
      type: String
    },
    alter_address: {
        type: String
    },
    address_line_1: {
        type: String
    },
    address_line_2: {
        type: String
    },
    town: {
        type: String
    },
    county: {
        type: String
    },
///////// about you //////////////
    title: {
        type: String
        // required: true
    },
    first_name: {
        type: String
        // required: true
    },
    last_name: {
        type: String
        // required: true
    },
    gender: {
        type: String
        // required: true
    },
    date_of_birth: {
        type: String
        // required: true
    },
    marital_status: {
        type: String
        // required: true
    },
    employment_status: {
        type: String
        // required: true
    },
    occupation: {
        type: String
        // required: true
    },
    telephone: {
        type: String
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    first_buyer: {
        type: String
        // required: true
    },
    motor_convic: {
        type: String
        // required: true
    },
// ////////////// your property /////////////
    own_prop: {
        type: String,
        required: true
    },
    lives_in_prop: {
        type: String
    },
    holiday_home: {
        type: String
    },
    property_type: {
        type: String,
        required: true
    },
    year_built: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    heating: {
        type: String,
        required: true
    },
    burgler_alarm: {
        type: String,
        required: true
    },
    smoke_alarm: {
        type: String,
        required: true
    },
    security_locks: {
        type: String,
        required: true
    },
    basement: {
        type: String,
        required: true
    },
    roof_type: {
        type: String,
        required: true
    },
    roof_material: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    ex_roof_type: {
        type: String
    },
    ex_roof_material: {
        type: String
    },
    occupied: {
        type: String,
        required: true
    },
    smokers: {
        type: String,
        required: true
    },
    subsidence: {
        type: String,
        required: true
    },
    flooding: {
        type: String,
        required: true
    },
    neighbour: {
        type: String,
        required: true
    },
// //////////// your cover ////////////////
    policy_start: {
        type: String,
        required: true
    },
    build_cover: {
        type: String,
        required: true
    },
    con_cover: {
        type: String,
        required: true
    },
    vol_excess: {
        type: String,
        required: true
    },
    acc_damage: {
        type: String,
        required: true
    },
    pre_insured: {
        type: String,
        required: true
    },
// /////////// previous cover ///////////
    policy_end: {
        type: String
    },
    pre_insurance: {
        type: String
    },
    policy_num: {
        type: String
    },
    years_pre_insurer: {
        type: String
    },
    no_claims: {
        type: String
    },
// //////////// terms & cons box /////////////
    privacy_policy: {
        type: String,
        required: true
    },
    offers: {
        type: String
    },
    terms: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
