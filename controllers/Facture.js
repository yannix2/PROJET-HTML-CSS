const Facture = require('../models/Facture')

const getallFactures=async(req, res) => {
    try {
        const Factures = await Facture.find()
        return res.status(200).json({Factures:Factures})
    }
    catch(err) {return res.status(500).json(err)
}
};


const hetFacture=async(req, res) => {
    const id = req.params.FactureId;
    try {
        const Facture1=await Facture.findById(id)
        return res.status(200).json({Facture:Facture1})
    }

catch(err) {
    return res.status(500).json(err)
}}

const createFacture=async(req, res) => {
    const newFacture = new Facture({
     numFacture:req.body.numFacture,
     nomClient:req.body.nomClient,
     serviePar:req.body.serviePar,
     article:req.body.article,
     dateFacture:req.body.dateFacture,
    })
    try {
        const savedFacture = await newFacture.save()
        return res.status(200).json({SavedFacture:savedFacture})
    }

catch(err) {
    return res.status(500).json(err)
}
}

const updateFacture = async (req, res) => {
        const data = {...req.body}
        const id = req.params.FactureId
        try {
            const updatedFacture = await Facture.findByIdAndUpdate(id, data,{new : true})
            return res.status(200).json({UpdatedFacture:updatedFacture})
        }
        catch(err) {
            return res.status(500).json(err)
        }
}

const deleteFacture=async(req, res) => {
    const id = req.params.FactureId
    try {
        const deletedFacture = await Facture.findByIdAndDelete(id)
        return res.status(200).json({deletedFacture:deletedFacture})
    }
    catch(err) {
        return res.status(500).json(err)
    }
}

module.exports.deleteFacture = deleteFacture;

module.exports.hetFacture = hetFacture;
module.exports.getallFactures=getallFactures;

module.exports.createFacture = createFacture;
module.exports.updateFacture=updateFacture;