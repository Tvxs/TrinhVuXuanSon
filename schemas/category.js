let mongoose = require('mongoose')
let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "Truong nay la unique"]
    },
    description: {
        type: String,
        default: "",
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('category', categorySchema)