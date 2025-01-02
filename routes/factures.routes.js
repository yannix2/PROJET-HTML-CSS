const FactureRoutes = require('express').Router();
const FactureControl=require('../controllers/Facture')
const authenticated=require('../middlewares/verifyToken')


FactureRoutes.get('/:FactureId',authenticated,FactureControl.hetFacture)
FactureRoutes.get('/',FactureControl.getallFactures)
FactureRoutes.post('/addFacture',authenticated,FactureControl.createFacture)
FactureRoutes.put('/:FactureId',authenticated,FactureControl.updateFacture)
FactureRoutes.delete('/:FactureId',authenticated,FactureControl.deleteFacture)
module.exports = FactureRoutes;