exports.cecldta = (req, res) => {
    if(!req.body.numdoc){
        res.json("ERROR: Formato de json incorrecto, añadir campo 'numdoc'.");
    }
    else {
        var numdoc = parseInt(req.body.numdoc, 10);
        if(numdoc % 10 != 0){
            res.json(require('../Json ejemplos/CECLDTA/listadoTarjetas.json'));
        }
        else{
            res.json(require('../Json ejemplos/CECLDTA/usuarioNoExiste.json'));
        }
    }
};

exports.cecldtaOK=(req,res) => { res.json(require('../Json ejemplos/CECLDTA/listadoTarjetas.json')); }
exports.cecldtaERROR=(req,res) => { res.json(require('../Json ejemplos/CECLDTA/usuarioNoExiste.json')); }
