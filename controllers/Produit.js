const Produit = require('../models/Produit')

const getallProduits=async(req, res) => {
    try {
        const Produits = await Produit.find()
        return res.status(200).json({Produits:Produits})
    }
    catch(err) {return res.status(500).json(err)
}
};


const hetProduit=async(req, res) => {
    const id = req.params.ProduitId;
    try {
        const Produit1=await Produit.findById(id)
        return res.status(200).json({Produit:Produit1})
    }

catch(err) {
    return res.status(500).json(err)
}}

const createProduit=async(req, res) => {
    const newProduit = new Produit({
      id:req.body.id,
      nomProduit:req.body.nomProduit,
      prix:req.body.prix,
      quantite:req.body.quantite,
      voiture:req.body.voiture,
      marque:req.body.marque
    })
    try {
        const savedProduit = await newProduit.save()
        return res.status(200).json({SavedProduit:savedProduit})
    }

catch(err) {
    return res.status(500).json(err)
}
}

const updateProduit = async (req, res) => {
        const data = {...req.body}
        const id = req.params.ProduitId
        try {
            const updatedProduit = await Produit.findByIdAndUpdate(id, data,{new : true})
            return res.status(200).json({UpdatedProduit:updatedProduit})
        }
        catch(err) {
            return res.status(500).json(err)
        }
}

const deleteProduit=async(req, res) => {
    const id = req.params.ProduitId
    try {
        const deletedProduit = await Produit.findByIdAndDelete(id)
        return res.status(200).json({deletedProduit:deletedProduit})
    }
    catch(err) {
        return res.status(500).json(err)
    }
}

module.exports.deleteProduit = deleteProduit;

module.exports.hetProduit = hetProduit;
module.exports.getallProduits=getallProduits;

module.exports.createProduit = createProduit;
module.exports.updateProduit=updateProduit;