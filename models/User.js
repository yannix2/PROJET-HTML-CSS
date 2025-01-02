const mongoose=require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const UserSchema = new Schema(
    {
        firstname : {type: String, required: true,maxlength:64},
        lastname : {type: String, required: true,maxlength:64},
        email : {type: String, required: true,unique: true,index: true},
        phone_number : {type:Number, required: true,unique: true,index: true},
        cin: {type: Number, required: true,unique : true,index: true},
        password:{type: String, required: true,maxlength:256},
        birthday: {type: Date},
    },
    {timestamps:true}
)
 
UserSchema.plugin(uniqueValidator,{message:"not Unique"})

module.exports=mongoose.model('Users',UserSchema)