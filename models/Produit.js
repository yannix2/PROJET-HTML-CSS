const mongoose=require('mongoose')
const Schema = mongoose.Schema

const Produit = new Schema({
    id :{type : String,required:true,unique :true,index:true},
    nomProduit:{type : String,required:true},
    prix:{type : Number,required:true,default:0},
    quantite:{type : String,required:true,default:0},
    voiture:[{type : String}],
    marque:[{type : String}]
},{timestamps:true})

module.exports=mongoose.model("Produit",Produit)
