const mongoose=require('mongoose')
const Schema = mongoose.Schema

const AddressSchema= new Schema({
    zipCode:{type:Number},
    city :{type:String},
    street:{type:String}
})

module.exports=mongoose.model('Address',AddressSchema)