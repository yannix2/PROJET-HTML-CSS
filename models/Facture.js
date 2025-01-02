const mongoose=require('mongoose')
const Schema = mongoose.Schema

const Facture = new Schema({
    dateFacture:{type:Date,required:true},
    numFacture :{type : Number,required:true,unique :true,index:true},
    nomClient:{type : String,required:true},
    serviePar : {type:mongoose.Schema.Types.ObjectId,ref:"User"},
    article:[{type:mongoose.Schema.Types.ObjectId,ref:'Produit'}]
},{timestamps:true})

module.exports=mongoose.model("Facture",Facture)
