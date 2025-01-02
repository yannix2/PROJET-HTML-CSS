const ProductRoutes = require('express').Router();
const produitControl=require('../controllers/Produit')
const authenticated=require('../middlewares/verifyToken')


ProductRoutes.get('/:ProduitId',authenticated,produitControl.hetProduit)
ProductRoutes.get('/',produitControl.getallProduits)
ProductRoutes.post('/addProduct',authenticated,produitControl.createProduit)
ProductRoutes.put('/:ProduitId',authenticated,produitControl.updateProduit)
ProductRoutes.delete('/:ProduitId',authenticated,produitControl.deleteProduit)
module.exports = ProductRoutes;