const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        bookName:{
            type:String,
            require:[true,'Name of the book is mandatory']
        },
        authorName:{
            type:String,
            require:[true,'Name of the author is mandatory']
        },
        publishYear:{
            type: Number,
            require:[true,'Year of the book is mandatory']
        },
        price:{
            type:Number,
            require:[true,'Price of the book is mandatory']
        },
        status:{
            type:Boolean,
            default:true
        }
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('Book',bookSchema)