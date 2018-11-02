let User = require('../modelo/User')

let UserController = {
    show(req, res) {
        User.find({})
        .then(docs => {
        res.json(docs)
        }).catch(err => {
        res.json(err)
        })
        },
    store(req, res) {
        User.create({
        username: req.body.username,
        email: req.body.email,
        password:req.body.password
        }).then(doc => {
        res.json(doc)
        }).catch(err => {
        res.json(err)
        })
        },
    find (req,res){
        User.findById({
            _id: req.params.id

        })
        .then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    }    
}
    
    module.exports = UserController;

    