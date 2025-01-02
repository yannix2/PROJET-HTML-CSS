const User=require("../models/User")
const Address = require("../models/Address")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function SignUp (req,res){
    try {
       
        const user= await User.findOne({cin:req.body.cin});
        
        if (user) return res.status(422).json('User already exist');
        const salt = await bcrypt.genSalt(16)  
        const hashedpassword = await bcrypt.hash(req.body.password,salt)
            //AJOUT USER 

        const newUser = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashedpassword,
            phone_number:req.body.phone_number,
            cin:req.body.cin
        });
        const SavedUser=await newUser.save()
        return res.status(200).json({User: SavedUser})
    }
    catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
}

async function SignIn(req, res) {
    try {
        const user = await User.findOne({cin : req.body.cin })
        if (!user) return res.status(403).json('User does not exist')
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(403).json('Password does not match')
        else {
            const token = jwt.sign({ _id: user._id}, 'azerty', { expiresIn: '30min' })
            return res.status(200).json({ token: token, user: user })
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
}


module.exports.SignIn=SignIn;
module.exports.SignUp =SignUp ;