const mongoose = require('mongoose');

const Schema = moongose.Schema;

const userSchema = new schema({
    name: {
        type: String, 
        required: true,
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    gender:{
        type: String,
        enum:['hombre', 'mujer']
    },
    post:[{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
},{timestamps:true});

mongoose.Types.ObjectId.prototype.valueOf = function (){
    return this.toString();
};

module.exports = userSchema;