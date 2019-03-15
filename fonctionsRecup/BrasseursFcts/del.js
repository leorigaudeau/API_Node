const { Brasseur } = require('../../models/brasseurs.js');

const delBrasseur = (req,res) => {
    const {id} = req.params;
    Brasseur.findOneAndDelete(id).then((brasseur)=>{
        if (!brasseur) {
            res.status(404).send();
        }
    },e=>res.status(500).send(e))
};

module.exports={delBrasseur};