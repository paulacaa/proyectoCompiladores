let Place = require('../modelo/Place')

let PlaceController = {
    show(req, res) {
        Place.find({})
        .then(docs => {
        res.json(docs)
        }).catch(err => {
        res.json(err)
        })
        },
    store(req, res) {
        Place.create({
        name: req.body.name,
        description: req.body.description
        }).then(doc => {
        res.json(doc)
        }).catch(err => {
        res.json(err)
        })
        },
    find (req,res){
        place.findById({
            _id: req.params.id

        })
        .then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    update(req, res){
        Place.update({
            _id: req.params.id
        },{
            name: req.body.name,
            description: req.body.description
        }).then(doc => {
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    
    destroy(req, res){
        Place.findByIdAndRemove({
            _id: req.params.id    
        })
        .then(doc => {
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    }
}
    
    module.exports = PlaceController;