const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellerSchema = new Schema({//form

    fullName: {
        type: String,
        required: true,//fullname fix
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
});

module.exports = mongoose.model("Seller", SellerSchema);//export